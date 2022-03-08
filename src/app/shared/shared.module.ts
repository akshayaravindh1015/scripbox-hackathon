import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { components, directives, pipes } from '.';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...components, ...directives, ...pipes],
})
export class SharedModule {}
