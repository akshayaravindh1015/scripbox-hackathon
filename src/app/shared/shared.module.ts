import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { components, directives, pipes } from '.';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [...components, ...directives, ...pipes],
})
export class SharedModule {}
