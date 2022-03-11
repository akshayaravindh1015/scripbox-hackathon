import { forkJoin, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env';
import { BackendService } from '@shared/services/backend.service';
import { Comment } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class ModifyChallengeService {
  constructor(private _backendServc: BackendService) {}

  addUpVoteByEmp(challengeId: string, empId: string): Observable<any> {
    const CHALLENGE_UPVOTES_ENDPOINT = `${environment.api.endpoints.challenges}/${challengeId}/votes/${empId}`;
    return this._backendServc.putCall(CHALLENGE_UPVOTES_ENDPOINT, true).pipe(
      map(() => {}),
      catchError((error) => {
        const message = 'Adding empIds to challenge Up Votes failed!...';
        alert(message + '\n' + error.message);
        throw new Error(message);
        // return error.message;
      })
    );
  }

  addDownVoteByEmp(challengeId: string, empId: string): Observable<any> {
    const CHALLENGE_UPVOTES_ENDPOINT = `${environment.api.endpoints.challenges}/${challengeId}/votes/${empId}`;
    return this._backendServc.putCall(CHALLENGE_UPVOTES_ENDPOINT, false).pipe(
      map(() => {}),
      catchError((error) => {
        const message = 'Removing empIds to challenge Up Votes failed!...';
        alert(message + '\n' + error.message);
        throw new Error(message);
        // return error.message;
      })
    );
  }

  addComments(challengeId: string, commentObj: Comment): Observable<any> {
    const CHALLENGE_COMMENTS_ENDPOINT = `${environment.api.endpoints.challenges}/${challengeId}/comments`;

    return this._backendServc
      .postCall(CHALLENGE_COMMENTS_ENDPOINT, commentObj)
      .pipe(
        map(() => {}),
        catchError((error) => {
          const message = 'Adding Comments failed!...';
          alert(message + '\n' + error.message);
          throw new Error(message);
          // return error.message;
        })
      );
  }
  // updateChallengeVotes(
  //   challengeId: string,
  //   upVotes: string[],
  //   downVotes: string[]
  // ): Observable<any> {
  //   const CHALLENGE_UPVOTES_ENDPOINT = `${environment.api.endpoints.challenges}/${challengeId}/upVotes`;
  //   const CHALLENGE_DOWNVOTES_ENDPOINT = `${environment.api.endpoints.challenges}/${challengeId}/downVotes`;

  //   const upVotesCall$ = this._backendServc.putCall(
  //     CHALLENGE_UPVOTES_ENDPOINT,
  //     upVotes
  //   );
  //   const downVotesCall$ = this._backendServc.putCall(
  //     CHALLENGE_DOWNVOTES_ENDPOINT,
  //     downVotes
  //   );

  //   return forkJoin({
  //     upVotes: upVotesCall$,
  //     downVotes: downVotesCall$,
  //   }).pipe(
  //     map(() => {}),
  //     catchError((error) => {
  //       const message = 'Adding empIds to challenge Votes failed!...';
  //       alert(message + '\n' + error.message);
  //       throw new Error(message);
  //       // return error.message;
  //     })
  //   );
  // }
}
