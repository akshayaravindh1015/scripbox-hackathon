import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Challenge } from '@shared/models';

import { AppState, challenegsList$ } from '@store/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss'],
})
export class ChallengesListComponent implements OnInit, OnDestroy {
  challenges: Challenge[] = [];
  subscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(challenegsList$)
      .subscribe((list) => (this.challenges = list));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
