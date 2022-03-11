import { CardComponent } from './UI/card/card.component';
import { InputComponent } from './UI/input/input.component';
import { TagsInputComponent } from './UI/tags-input/tags-input.component';
import { ChipComponent } from './UI/chip/chip.component';
import { SpinnerComponent } from './UI/spinner/spinner.component';
import { ButtonComponent } from './UI/button/button.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { CommentsComponent } from './components/comments/comments.component';
import { NewChallengeComponent } from './components/new-challenge/new-challenge.component';
import { ChallengeCardComponent } from './components/challenge-card/challenge-card.component';

export const components: any[] = [
  CardComponent,
  InputComponent,
  ButtonComponent,
  TagsInputComponent,
  ChipComponent,
  SpinnerComponent,
  ChallengeCardComponent,
  NewChallengeComponent,
  TooltipDirective,
  CommentsComponent,
];

export const pipes: any[] = [];
export const directives: any[] = [];

// export const services: any[] = [];
// export const resolvers: any[] = [];
// export const guards: any[] = [];

export * from './UI/card/card.component';
export * from './UI/input/input.component';
export * from './UI/tags-input/tags-input.component';
export * from './UI/chip/chip.component';
export * from './UI/spinner/spinner.component';
export * from './UI/button/button.component';
export * from './directives/tooltip.directive';
export * from './components/challenge-card/challenge-card.component';
export * from './components/new-challenge/new-challenge.component';
