import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ThemeService } from '@layout/services/theme.service';
import { AppState, isLoggedIn } from '@store/index';
import { AuthService } from '@core/index';

@Component({
  selector: 'cust-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private _themeServc: ThemeService,
    private store: Store<AppState>,
    private _authServc: AuthService
  ) {}

  isLoggedIn$ = this.store.select(isLoggedIn);
  ngOnInit(): void {}

  toggleTheme(event: Event) {
    event.preventDefault();
    if (this._themeServc.isDarkTheme()) {
      this._themeServc.setLightTheme();
    } else {
      this._themeServc.setDarkTheme();
    }
  }

  onLogOut(event: Event) {
    event.preventDefault();
    this._authServc.logOut();
  }
}
