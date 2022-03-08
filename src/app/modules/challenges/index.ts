import { NewChallengeComponent } from './new-challenge/new-challenge.component';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';
import { ChallengeInfoComponent } from './challenge-info/challenge-info.component';

export const components: any[] = [
  NewChallengeComponent,
  ChallengeCardComponent,
  ChallengeInfoComponent,
];

export const pipes: any[] = [];
export const directives: any[] = [];

// export const services: any[] = [];
// export const resolvers: any[] = [];
// export const guards: any[] = [];

export * from './new-challenge/new-challenge.component';
export * from './challenge-card/challenge-card.component';
export * from './challenge-info/challenge-info.component';
