import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { components, directives, pipes } from '.';
import { SharedModule } from '@shared/shared.module';
import { ModalModule } from '@shared/modal/modal.module';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule, ModalModule],
  exports: [...components, ...directives, ...pipes],
})
export class EmployeeModule {}
