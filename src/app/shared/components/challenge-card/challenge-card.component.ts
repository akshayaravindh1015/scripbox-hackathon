import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Challenge } from '@shared/models';
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

import { AppState, challenge$ } from '@store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent implements OnInit, OnDestroy {
  upVote = upFilled;
  downVote = downRegular;
  bookMark = bookMarkRegular;

  @Input() challengeId!: string;

  state$!: Observable<Challenge | undefined>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.state$ = this.store.select(challenge$(this.challengeId));
    // this.state$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {}
}
