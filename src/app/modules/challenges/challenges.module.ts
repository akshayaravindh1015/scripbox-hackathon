import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { components, directives, pipes } from '.';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [CommonModule, RouterModule, FontAwesomeModule, SharedModule],
  exports: [...components, ...directives, ...pipes],
})
export class ChallengesModule {}
