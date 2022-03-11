import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env';
import { BackendService } from '@shared/services/backend.service';

@Injectable({
  providedIn: 'root',
})
export class ModifyEmpDataService {
  constructor(private _backendServc: BackendService) {}

  updateEmployeeUpvotes(empId: string, challengeId: string): Observable<any> {
    const EMP_VOTE_END_POINT = `${environment.api.endpoints.employees}/${empId}/votedChallenges/${challengeId}`;
    return this._backendServc.putCall(EMP_VOTE_END_POINT, true).pipe(
      map(() => {}),
      catchError((error) => {
        const message =
          'Adding the challenge id to my voted challenges failed!...';
        alert(message + '\n' + error.message);
        throw new Error(message);
        // return error.message;
      })
    );
  }

  updateEmployeeDownUpvotes(
    empId: string,
    challengeId: string
  ): Observable<any> {
    const EMP_UPVOTES_POINT = `${environment.api.endpoints.employees}/${empId}/votedChallenges/${challengeId}`;
    return this._backendServc.putCall(EMP_UPVOTES_POINT, false).pipe(
      map(() => {}),
      catchError((error) => {
        const message =
          'Adding the challenge id to my down voted challenges failed!...';
        alert(message + '\n' + error.message);
        throw new Error(message);
        // return error.message;
      })
    );
  }

  addRemoveBookMark(
    empId: string,
    challengeId: string,
    saveBookMark: boolean
  ): Observable<any> {
    const EMP_BOOKMARKS_POINT = `${environment.api.endpoints.employees}/${empId}/bookMarkedChallenges/${challengeId}`;
    let bookMark$ = this._backendServc.putCall(EMP_BOOKMARKS_POINT, true);
    if (saveBookMark == false) {
      bookMark$ = this._backendServc.deleteCall(EMP_BOOKMARKS_POINT);
    }
    return bookMark$.pipe(
      map(() => {}),
      catchError((error) => {
        const message = 'Updating Book marks failed!...';
        alert(message + '\n' + error.message);
        throw new Error(message);
        // return error.message;
      })
    );
  }
}
