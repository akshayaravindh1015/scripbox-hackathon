import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components, directives, pipes } from '.';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule],
  exports: [...components, ...directives, ...pipes],
})
export class HomeModule {}
