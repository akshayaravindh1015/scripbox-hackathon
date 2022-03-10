import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env';
import { Challenge, challengeFromFactory } from '@shared/models';
import { BackendService } from '@shared/services/backend.service';
import { AppState } from '@store/index';
import { addChallenge } from '@store/challenges';

const CHALLENGES_ENDPIONT = environment.api.endpoints.challenges;
@Injectable({
  providedIn: 'root',
})
export class AddChallengeService {
  constructor(
    private _backendServc: BackendService,
    private store: Store<AppState>
  ) {}

  addANewChallenge(challengePayload: Challenge): Observable<any> {
    let payload = { ...challengePayload };
    return this._backendServc
      .postCall(CHALLENGES_ENDPIONT, {
        ...challengePayload,
        createdAt: JSON.stringify(challengePayload.createdAt),
      })
      .pipe(
        map((result) => {
          const newChallenge = challengeFromFactory({
            ...payload,
            id: result.name,
          });
          this.store.dispatch(addChallenge({ challenge: newChallenge }));
        }),
        catchError((error) => {
          const message = 'Adding the challenge failed!...';
          alert(message + '\n' + error.message);
          // throw new Error(message);
          return error.message;
        })
      );
  }
  updateEmployeeChallenges(
    empId: string,
    empChallenges: string[]
  ): Observable<any> {
    const EMP_CHALLENGES_POINT = `${environment.api.endpoints.employees}/${empId}/empData/myChallenges`;
    return this._backendServc.putCall(EMP_CHALLENGES_POINT, empChallenges).pipe(
      map(() => {}),
      catchError((error) => {
        const message = 'Adding the challenge id to my challenges failed!...';
        alert(message + '\n' + error.message);
        throw new Error(message);
        // return error.message;
      })
    );
  }
}
