import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env';
import { Challenge } from '@shared/models';
import { BackendService } from '@shared/services/backend.service';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@store/index';

const CHALLENGES_ENDPIONT = environment.api.endpoints.challenges;
@Injectable({
  providedIn: 'root',
})
export class AddChallengeService {
  constructor(
    private _backendServc: BackendService,
    private store: Store<AppState>
  ) {}

  addANewChallenge(newChallenge: Partial<Challenge>): Observable<any> {
    return this._backendServc.postCall(CHALLENGES_ENDPIONT, newChallenge).pipe(
      map((id) => {
        console.log(id);
      }),
      catchError((error) => {
        return error.message;
      })
    );
  }
}
