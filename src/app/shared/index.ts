import { CardComponent } from "./components/card/card.component";
import { LoginComponent } from './components/login/login.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

export const components: any[] = [CardComponent, LoginComponent, InputComponent, ButtonComponent];

export const pipes: any[] = [];
export const directives: any[] = [];

// export const services: any[] = [];
// export const resolvers: any[] = [];
// export const guards: any[] = [];

export * from "./components/card/card.component";
export * from './components/login/login.component';
export * from './components/input/input.component';
export * from './components/button/button.component';
