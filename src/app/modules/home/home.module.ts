import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components, directives, pipes } from '.';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [...components, HomeComponent, ...directives, ...pipes],
  imports: [CommonModule, SharedModule],
  exports: [...components, ...directives, ...pipes],
})
export class HomeModule {}
