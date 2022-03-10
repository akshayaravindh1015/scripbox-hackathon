import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  tap,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';

import { AppState, empData$ } from '..';
import { addToMyCreatedChallenges } from '@store/auth';
import { addChallenge } from './challenges.actions';
import { AddChallengeService } from '@employee/services/add-challenge.service';

@Injectable()
export class ChallengesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private _addChallengesService: AddChallengeService
  ) {}

  addANewChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addChallenge),
      // switchMap((action) => { // for multiple action triggers
      //   return [addToMyCreatedChallenges({ id: action.challenge.id })];
      // })
      concatLatestFrom(() => this.store.select(empData$)),
      exhaustMap(([action, empData]) =>
        this._addChallengesService
          .updateEmployeeChallenges(empData.empId, [
            ...empData.myChallenges,
            action.challenge.id,
          ])
          .pipe(
            map(() => addToMyCreatedChallenges({ id: action.challenge.id }))
            //  catchError((error: any) => {
            //    //send some notification;
            //    return of(true);
            //  }),
          )
      )
    )
  );
}
