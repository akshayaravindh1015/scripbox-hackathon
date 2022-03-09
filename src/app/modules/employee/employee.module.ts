import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components, directives, pipes } from '.';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from '@shared/modal/modal.module';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, SharedModule, RouterModule, ModalModule],
  exports: [...components, ...directives, ...pipes],
})
export class EmployeeModule {}
