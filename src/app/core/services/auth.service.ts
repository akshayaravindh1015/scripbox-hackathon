import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, logOut } from '@store/auth';

import { AppState } from '@store/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {}

  login() {
    this.store.dispatch(login());
    this.router.navigate(['/home']);
  }

  logOut() {
    this.store.dispatch(logOut());
    this.isLoggedIn = false;
  }
}
