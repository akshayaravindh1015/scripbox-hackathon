import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { LayoutModule } from '@layout/layout.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { EmployeeModule } from '@employee/employee.module';
import { ChallengesModule } from '@challenges/challenges.module';
import { ModalModule } from '@shared/modal/modal.module';

@NgModule({
  declarations: [CoreComponent, LoginComponent],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    LayoutModule,
    SharedModule,
    EmployeeModule,
    ChallengesModule,
    ModalModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
