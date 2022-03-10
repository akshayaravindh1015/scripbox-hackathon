import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env';
import { BackendService } from '@shared/services/backend.service';

@Injectable({
  providedIn: 'root',
})
export class ModifyChallengeService {
  constructor(private _backendServc: BackendService) {}

  updateEmployeeUpvotes(
    empId: string,
    empUpVotedChallenges: string[]
  ): Observable<any> {
    const EMP_UPVOTES_POINT = `${environment.api.endpoints.employees}/${empId}/votedChallenges`;
    return this._backendServc
      .putCall(EMP_UPVOTES_POINT, empUpVotedChallenges)
      .pipe(
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
    empDownVotedChallenges: string[]
  ): Observable<any> {
    const EMP_DOWN_VOTES_POINT = `${environment.api.endpoints.employees}/${empId}/downVotedChllenges`;
    return this._backendServc
      .putCall(EMP_DOWN_VOTES_POINT, empDownVotedChallenges)
      .pipe(
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

  updateEmployeeBookMarks(
    empId: string,
    empBookmarkedChallenges: string[]
  ): Observable<any> {
    const EMP_BOOKMARKS_POINT = `${environment.api.endpoints.employees}/${empId}/bookMarkedChallenges`;
    return this._backendServc
      .putCall(EMP_BOOKMARKS_POINT, empBookmarkedChallenges)
      .pipe(
        map(() => {}),
        catchError((error) => {
          const message =
            'Adding the challenge id to my bookmarked challenges failed!...';
          alert(message + '\n' + error.message);
          throw new Error(message);
          // return error.message;
        })
      );
  }
}
