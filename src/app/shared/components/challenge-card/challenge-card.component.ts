import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  faCircleArrowUp as upFilled,
  faCircleArrowDown as downFilled,
  faBookmark as bookMarkFilled,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleUp as upRegular,
  faCircleDown as downRegular,
  faBookmark as bookMarkRegular,
} from '@fortawesome/free-regular-svg-icons';

import { Challenge, EmpData } from '@shared/models';
import { AppState, challenge$, isLoggedIn$, empData$ } from '@store/index';
import { ModifyEmpDataService } from '@employee/services/modify-emp-data.service';
import {
  bookMarkChallenge,
  downVoteChallenge,
  upVoteChallenge,
} from '@store/emp-auth';

@Component({
  selector: 'challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent implements OnInit, OnDestroy {
  upVote = upRegular;
  downVote = downRegular;
  bookMark = bookMarkRegular;

  @Input() challengeId!: string;

  state$!: Observable<Challenge | undefined>;
  isLoggedIn$ = this.store.select(isLoggedIn$);
  isUpVoted: boolean = false;
  isDownVoted: boolean = false;
  isBookMarked: boolean = false;
  empData!: EmpData;

  constructor(
    private store: Store<AppState>,
    private _modifyEmpDataServc: ModifyEmpDataService
  ) {}

  ngOnInit(): void {
    this.state$ = this.store.select(challenge$(this.challengeId));
    this.store.select(empData$).subscribe((empData) => {
      this.empData = empData;
      this.isUpVoted = empData.votedChallenges.includes(this.challengeId);
      if (this.isUpVoted) this.upVote = upFilled;
      this.isDownVoted = empData.downVotedChllenges.includes(this.challengeId);
      if (this.isDownVoted) this.downVote = downFilled;
      this.isBookMarked = empData.bookMarkedChallenges.includes(
        this.challengeId
      );
      if (this.isBookMarked) this.bookMark = bookMarkFilled;
    });
    // this.state$.subscribe((data) => console.log(data));
  }

  upVoteChallenge() {
    if (!this.isUpVoted) {
      this._modifyEmpDataServc
        .updateEmployeeUpvotes(this.empData.empId, this.challengeId)
        .subscribe(() => {
          this.store.dispatch(
            upVoteChallenge({
              challengeId: this.challengeId,
              empId: this.empData.empId,
            })
          );
        });
    }
  }
  bookmarkChallenge() {
    if (!this.isBookMarked) {
      this._modifyEmpDataServc
        .updateEmployeeBookMarks(this.empData.empId, [
          ...this.empData.bookMarkedChallenges,
          this.challengeId,
        ])
        .subscribe(() => {
          this.store.dispatch(bookMarkChallenge({ id: this.challengeId }));
        });
    }
  }
  downVoteChallenge() {
    if (!this.isDownVoted) {
      this._modifyEmpDataServc
        .updateEmployeeDownUpvotes(this.empData.empId, this.challengeId)
        .subscribe(() => {
          this.store.dispatch(
            downVoteChallenge({
              challengeId: this.challengeId,
              empId: this.empData.empId,
            })
          );
        });
    }
  }

  ngOnDestroy(): void {}
}
