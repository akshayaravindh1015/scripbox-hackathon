import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState, isLoggedIn$ } from '@store/index';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(isLoggedIn$).pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.parseUrl('login');
        }
      })
    );
  }
}
