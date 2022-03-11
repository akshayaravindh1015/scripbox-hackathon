import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  tap,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';

import { AppState, empData$, challenge$, empId$ } from '..';
import {
  addToMyCreatedChallenges,
  upVoteChallenge,
  downVoteChallenge,
} from '@store/emp-auth';
import {
  addChallenge,
  addDownVotedUser,
  addUpVotedUser,
} from './challenges.actions';
import { AddChallengeService } from '@challenges/index';
import { ModifyChallengeService } from '@challenges/services/modify-challenge.service';
import { ModifyEmpDataService } from '@employee/services/modify-emp-data.service';

@Injectable()
export class ChallengesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private _addChallengesService: AddChallengeService,
    private _modifyEmpDataService: ModifyEmpDataService,
    private _modifyChallengeService: ModifyChallengeService
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

  upVoteChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(upVoteChallenge),
      exhaustMap((action) => {
        return this._modifyChallengeService
          .addUpVoteByEmp(action.challengeId, action.empId)
          .pipe(
            map(() =>
              addUpVotedUser({
                challengeId: action.challengeId,
                empId: action.empId,
              })
            )
            // catchError((error: any) => {
            //   //send some notification;
            //   return of(true);
            // })
          );
      })
    )
  );

  downVoteChallenge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(downVoteChallenge),
      exhaustMap((action) => {
        return this._modifyChallengeService
          .addDownVoteByEmp(action.challengeId, action.empId)
          .pipe(
            map(() =>
              addDownVotedUser({
                challengeId: action.challengeId,
                empId: action.empId,
              })
            )
            // catchError((error: any) => {
            //   //send some notification;
            //   return of(true);
            // })
          );
      })
    )
  );
}
