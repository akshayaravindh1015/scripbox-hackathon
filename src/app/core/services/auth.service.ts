import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, logOut } from '@store/auth';

import { AppState } from '@store/index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private store: Store<AppState>) {}

  login(empId: string) {
    this.store.dispatch(login({ empId }));
    // this.router.navigate(['/challenges/list']);
    this.router.navigate(['/employee/challenges']);
  }

  logOut() {
    this.store.dispatch(logOut());
    this.router.navigate(['/login']);
  }
}
