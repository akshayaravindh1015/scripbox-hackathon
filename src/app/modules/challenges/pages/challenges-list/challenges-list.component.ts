import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, challenegsList$ } from '@store/index';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss'],
})
export class ChallengesListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  challenges$ = this.store.select(challenegsList$);

  ngOnInit(): void {}
}
