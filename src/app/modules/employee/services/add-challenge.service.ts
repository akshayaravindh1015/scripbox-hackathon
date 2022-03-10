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

  addANewChallenge(challengePayload: Partial<Challenge>): Observable<any> {
    return this._backendServc
      .postCall(CHALLENGES_ENDPIONT, challengePayload)
      .pipe(
        map((result) => {
          const newChallenge = challengeFromFactory({
            id: result.name,
            ...challengePayload,
          });
          this.store.dispatch(addChallenge({ challenge: newChallenge }));
        }),
        catchError((error) => {
          const message = 'Adding the challenge failed!...';
          alert(message);
          // throw new Error(message);
          return error.message;
        })
      );
  }
}
