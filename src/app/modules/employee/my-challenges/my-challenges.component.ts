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
    this._modalServc.open('add-a-new-challenge-container');
  }

  onCancelAddingNewChallenge = () => {
    console.log('came here');
    this._modalServc.close('add-a-new-challenge-container');
  };
}
