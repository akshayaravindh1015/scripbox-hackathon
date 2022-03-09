import { AccountInfoComponent } from './account-info/account-info.component';
import { MyChallengesComponent } from './my-challenges/my-challenges.component';
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

export * from './account-info/account-info.component';
export * from './my-challenges/my-challenges.component';
export * from './employee.component';
