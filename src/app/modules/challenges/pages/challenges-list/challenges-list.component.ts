import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Challenge } from '@shared/models';

import { AppState, challenegsList$ } from '@store/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss'],
})
export class ChallengesListComponent implements OnInit, OnDestroy {
  challenges: Challenge[] = [];
  subscription!: Subscription;
  sortFun = (c1: Challenge, c2: Challenge) => c2.upVotesCount - c1.upVotesCount;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(challenegsList$)
      .subscribe((list) => this.setSortedChallenges(list));
  }

  setSortedChallenges(challenges: Challenge[]) {
    this.challenges = challenges.slice().sort(this.sortFun);
  }
  changeSortFun(event: Event) {
    switch ((event.target as HTMLSelectElement).value) {
      case 'dateAsc':
        this.sortFun = (c1: Challenge, c2: Challenge) =>
          c1.createdAt > c2.createdAt ? 1 : -1;
        break;
      case 'dateDesc':
        this.sortFun = (c1: Challenge, c2: Challenge) =>
          c1.createdAt > c2.createdAt ? -1 : 1;
        break;
      case 'votesAsc':
        this.sortFun = (c1: Challenge, c2: Challenge) =>
          c1.upVotesCount - c2.upVotesCount;
        break;
      case 'votesDesc':
        this.sortFun = (c1: Challenge, c2: Challenge) =>
          c2.upVotesCount - c1.upVotesCount;
        break;
    }
    this.setSortedChallenges(this.challenges);
  }

  openChallenge(challengeId: string) {
    this.router.navigate([`challenges/${challengeId}`]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
