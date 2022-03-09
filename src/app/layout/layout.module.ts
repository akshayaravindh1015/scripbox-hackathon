import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from '.';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class LayoutModule {}
