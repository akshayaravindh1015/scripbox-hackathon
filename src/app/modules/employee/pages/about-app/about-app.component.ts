import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.scss'],
})
export class AboutAppComponent implements OnInit {
  constructor() {}

  features: string[] = [
    'If new user Id is entered, It automatically creates a NEW UserId with that value.',
    '"Home" contains all the challenges added by all users',
    '"My-Challenges" contain challenges added by YOU',
    'Added SCHEMA - able to change validatons of inputs, SHOW/HIDE fields, alter validations, change error messages etc..',
    'Route Guards used for hiding actions on not logged in',
    'Double click to open the challenge',
    'Able to add comments to each challenge',
    'Able to upvote, downvote, bookmark challenges',
    'Account info shows USER info inlcuding his saved/voted/created challenges',
  ];
  ngOnInit(): void {}
}
