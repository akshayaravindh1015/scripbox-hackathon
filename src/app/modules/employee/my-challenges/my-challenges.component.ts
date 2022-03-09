import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.scss'],
})
export class MyChallengesComponent implements OnInit {
  challenges: any[] = [];

  constructor(private _modalServc: ModalService) {}

  ngOnInit(): void {}

  onAddNewChallenge() {
    this.openNewChallengeModal('add-a-new-challenge-container');
  }

  openNewChallengeModal(id: string) {
    this._modalServc.open(id);
  }

  onCloseNewChallenge(id: string) {
    this._modalServc.close(id);
  }
}
