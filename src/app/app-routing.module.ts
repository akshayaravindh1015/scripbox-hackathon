import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@core/components/login/login.component';
import { AuthGuard } from '@core/services/auth.guard';
import {
  EmployeeComponent,
  MyChallengesComponent,
  AccountInfoComponent,
} from '@employee/index';
import {
  GetChallengesResolver,
  ChallengesComponent,
  ChallengesListComponent,
  ChallengeInfoComponent,
} from '@challenges/index';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'challenges/list',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'challenges',
    component: ChallengesComponent,
    children: [
      {
        path: 'list',
        component: ChallengesListComponent,
        resolve: { challenges: GetChallengesResolver },
      },
      {
        path: ':id',
        component: ChallengeInfoComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'info',
        component: AccountInfoComponent,
      },
      {
        path: 'challenges',
        component: MyChallengesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
