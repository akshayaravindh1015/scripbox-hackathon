import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env';
import { BackendService } from '@shared/services/backend.service';
import { AppState } from '@store/index';
import { Challenge, challengeFromFactory } from '@shared/models';
import { loadChallenges, resetChallenges } from '@store/challenges';

const CHALLENGES_ENDPIONT = environment.api.endpoints.challenges;
@Injectable({
  providedIn: 'root',
})
export class GetChallengesResolver implements Resolve<Challenge[]> {
  constructor(
    private _backendServc: BackendService,
    private store: Store<AppState>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Challenge[]> {
    return this._backendServc.getCall(CHALLENGES_ENDPIONT).pipe(
      map((result) => {
        const challenges: Challenge[] = Object.keys(result).map((key: string) =>
          challengeFromFactory({
            id: key,
            ...result[key],
          })
        );
        this.store.dispatch(loadChallenges({ challenges }));
        return challenges;
      }),
      catchError((error: any) => {
        alert('Failed to fetch the challenges list: \n' + error.message);
        this.store.dispatch(resetChallenges());
        return of([]);
      })
    );
  }
}
