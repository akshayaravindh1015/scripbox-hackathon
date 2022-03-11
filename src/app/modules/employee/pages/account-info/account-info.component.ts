import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, empData$ } from '@store/index';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  empData$ = this.store.select(empData$);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
