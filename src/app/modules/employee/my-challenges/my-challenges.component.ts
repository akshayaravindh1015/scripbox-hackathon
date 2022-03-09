import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.scss'],
})
export class MyChallengesComponent implements OnInit {
  challenges: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onAddNewChallenge() {}
}
