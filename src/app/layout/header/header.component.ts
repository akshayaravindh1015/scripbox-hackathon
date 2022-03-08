import { Component, OnInit } from '@angular/core';

import { ThemeService } from '@layout/services/theme.service';

@Component({
  selector: 'cust-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor(private _themeServc: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme(event: Event) {
    event.preventDefault();
    if (this._themeServc.isDarkTheme()) {
      this._themeServc.setLightTheme();
    } else {
      this._themeServc.setDarkTheme();
    }
  }

}
