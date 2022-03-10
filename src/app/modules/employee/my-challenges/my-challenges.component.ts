import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/modal/modal.service';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.scss'],
})
export class MyChallengesComponent implements OnInit {
  challenges: any[] = [];
  showNewOpenModal: boolean = false;

  constructor(private _modalServc: ModalService) {}

  ngOnInit(): void {}

  onAddNewChallenge() {
    this.showNewOpenModal = true;
    this._modalServc.open('add-a-new-challenge-container');
  }

  onCancelAddingNewChallenge = () => {
    this.showNewOpenModal = false;
    this._modalServc.close('add-a-new-challenge-container');
  };
}
