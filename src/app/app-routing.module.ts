import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengeInfoComponent } from '@challenges/index';
import { LoginComponent } from '@core/components/login/login.component';
import { AuthGuard } from '@core/services/auth.guard';
import { ChallengesListComponent } from '@challenges/challenges-list/challenges-list.component';
import {
  EmployeeComponent,
  MyChallengesComponent,
  AccountInfoComponent,
} from '@employee/index';
import { ChallengesComponent } from '@challenges/challenges.component';

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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: ChallengesListComponent,
      },
      {
        path: ':id',
        component: ChallengeInfoComponent,
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
