import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@home/index';
import { ChallengeInfoComponent } from '@challenges/index';
import { AccountInfoComponent } from '@employee/index';
import { LoginComponent } from '@core/components/login/login.component';
import { AuthGuard } from '@core/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
  },
  {
    path: 'challenge/:id',
    component: ChallengeInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    component: AccountInfoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
