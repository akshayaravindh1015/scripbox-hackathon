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
import { ModifyChallengeService } from '@challenges/services/modify-challenge.service';
import {
  addToMyBookMarkedChallenges,
  addToMyDownVotedChallenges,
  addToMyUpVotedChallenges,
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
    private _modifyChallengeServc: ModifyChallengeService
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
      this._modifyChallengeServc
        .updateEmployeeUpvotes(this.empData.empId, [
          ...this.empData.votedChallenges,
          this.challengeId,
        ])
        .subscribe(() => {
          this.store.dispatch(
            addToMyUpVotedChallenges({ id: this.challengeId })
          );
        });
    }
  }
  bookmarkChallenge() {
    if (!this.isBookMarked) {
      this._modifyChallengeServc
        .updateEmployeeBookMarks(this.empData.empId, [
          ...this.empData.bookMarkedChallenges,
          this.challengeId,
        ])
        .subscribe(() => {
          this.store.dispatch(
            addToMyBookMarkedChallenges({ id: this.challengeId })
          );
        });
    }
  }
  downVoteChallenge() {
    if (!this.isDownVoted) {
      this._modifyChallengeServc
        .updateEmployeeDownUpvotes(this.empData.empId, [
          ...this.empData.downVotedChllenges,
          this.challengeId,
        ])
        .subscribe(() => {
          this.store.dispatch(
            addToMyDownVotedChallenges({ id: this.challengeId })
          );
        });
    }
  }

  ngOnDestroy(): void {}
}
