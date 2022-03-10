import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, empId$ } from '@store/index';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  empId$: Observable<string> = this.store.select(empId$);
  empId: string = '';

  constructor(private store: Store<AppState>) {
    // this.empId$ = this.store.select(empIdSelector);
  }

  ngOnInit(): void {
    this.store.select(empId$).subscribe((id) => (this.empId = id));
  }
}
