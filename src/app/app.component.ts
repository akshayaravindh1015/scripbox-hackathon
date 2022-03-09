import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'scripbox-hackathon';

  // isLoggedIn: string = 'false';
  // constructor(private store: Store<AppState>) {
  //   this.store.subscribe((data) => {
  //     this.isLoggedIn = `${data.auth.isLoggedIn}`;
  //   });
  // }
}
