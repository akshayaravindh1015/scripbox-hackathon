import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components, directives, pipes } from '.';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [...components, ...directives, ...pipes],
})
export class ChallengesModule {}
