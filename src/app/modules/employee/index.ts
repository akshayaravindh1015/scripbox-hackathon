import { AccountInfoComponent } from './pages/account-info/account-info.component';
import { MyChallengesComponent } from './pages/my-challenges/my-challenges.component';
import { EmployeeComponent } from './employee.component';

export const components: any[] = [
  AccountInfoComponent,
  MyChallengesComponent,
  EmployeeComponent,
];

export const pipes: any[] = [];
export const directives: any[] = [];

// export const services: any[] = [];
// export const resolvers: any[] = [];
// export const guards: any[] = [];

export * from './pages/account-info/account-info.component';
export * from './pages/my-challenges/my-challenges.component';
export * from './employee.component';
