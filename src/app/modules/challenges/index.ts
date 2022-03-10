import { ChallengeInfoComponent } from './pages/challenge-info/challenge-info.component';
import { ChallengesListComponent } from './pages/challenges-list/challenges-list.component';
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

export * from './pages/challenge-info/challenge-info.component';
export * from './pages/challenges-list/challenges-list.component';
export * from './challenges.component';

//Services
export * from './services/add-challenge.service';
export * from './services/get-challenges.resolver';
