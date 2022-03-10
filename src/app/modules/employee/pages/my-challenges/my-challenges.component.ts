import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@store/index';
import { myChallengesIds$ } from '@store/global.selectors';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.scss'],
})
export class MyChallengesComponent implements OnInit {
  challengeIds: string[] = [];
  showNewOpenModal: boolean = false;

  constructor(
    private _modalServc: ModalService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(myChallengesIds$)
      .subscribe((ids) => (this.challengeIds = ids));
  }

  onAddNewChallenge() {
    this.showNewOpenModal = true;
    this._modalServc.open('add-a-new-challenge-container');
  }

  onCancelAddingNewChallenge = () => {
    this.showNewOpenModal = false;
    this._modalServc.close('add-a-new-challenge-container');
  };
}
