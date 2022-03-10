import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import { ChipComponent } from './components/chip/chip.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

export const components: any[] = [
  CardComponent,
  InputComponent,
  ButtonComponent,
  TagsInputComponent,
  ChipComponent,
  SpinnerComponent,
];

export const pipes: any[] = [];
export const directives: any[] = [];

// export const services: any[] = [];
// export const resolvers: any[] = [];
// export const guards: any[] = [];

export * from './components/card/card.component';
export * from './components/input/input.component';
export * from './components/button/button.component';
export * from './components/tags-input/tags-input.component';
export * from './components/chip/chip.component';
export * from './components/spinner/spinner.component';
