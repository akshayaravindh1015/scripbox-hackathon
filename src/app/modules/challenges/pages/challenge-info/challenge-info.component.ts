import { Component, Input, OnInit } from '@angular/core';
import { ModifyEmpDataService } from '@employee/services/modify-emp-data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
import { AppState } from '@store/index';
import {
  upVoteChallenge,
  unBookMarkChallenge,
  bookMarkChallenge,
  downVoteChallenge,
} from '@store/emp-auth';
import { isLoggedIn$, challenge$, empData$ } from '@store/global.selectors';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'challenge-info',
  templateUrl: './challenge-info.component.html',
  styleUrls: ['./challenge-info.component.scss'],
})
export class ChallengeInfoComponent implements OnInit {
  upVote = upRegular;
  downVote = downRegular;
  bookMark = bookMarkRegular;

  challengeId!: string;

  state$!: Observable<Challenge | undefined>;
  isLoggedIn$ = this.store.select(isLoggedIn$);
  isUpVoted: boolean = false;
  isDownVoted: boolean = false;
  isBookMarked: boolean = false;
  empData!: EmpData;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private _modifyEmpDataServc: ModifyEmpDataService
  ) {}

  ngOnInit(): void {
    this.challengeId = this.activatedRoute.snapshot.params.id;
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
    this.state$.subscribe((data) => console.log(data));
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
    this._modifyEmpDataServc
      .addRemoveBookMark(
        this.empData.empId,
        this.challengeId,
        !this.isBookMarked
      )
      .subscribe(() => {
        if (this.isBookMarked) {
          this.store.dispatch(
            unBookMarkChallenge({ challengeId: this.challengeId })
          );
        } else {
          this.store.dispatch(
            bookMarkChallenge({ challengeId: this.challengeId })
          );
        }
      });
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
}
