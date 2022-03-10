import { ChallengeInfoComponent } from './challenge-info/challenge-info.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { ChallengesComponent } from './challenges.component';

export const components: any[] = [
  ChallengesComponent,
  ChallengeInfoComponent,
  ChallengesListComponent,
];

export const pipes: any[] = [];
export const directives: any[] = [];

// export const services: any[] = [];
// export const resolvers: any[] = [];
// export const guards: any[] = [];

export * from './challenge-info/challenge-info.component';
export * from './challenges-list/challenges-list.component';
export * from './challenges.component';
