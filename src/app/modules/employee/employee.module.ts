import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components, directives, pipes } from '.';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, SharedModule],
  exports: [...components, ...directives, ...pipes],
})
export class EmployeeModule {}
