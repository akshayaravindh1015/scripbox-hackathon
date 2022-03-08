import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreComponent } from './core.component';
import { LayoutModule } from '@layout/layout.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [
    CoreComponent,
    LoginComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
  ],
  exports: [
    CoreComponent,
  ]
})
export class CoreModule { }