import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  // empId$: Observable<string> = this.store.select((state) => state.auth.empId);
  empId: string = '';

  constructor(private store: Store<AppState>) {
    // this.empId$ = this.store.select((state) => state.auth.empId);
  }

  ngOnInit(): void {
    this.store
      .select((state) => state)
      .subscribe((state) => (this.empId = state.auth.empId));
  }

  get empId$(): Observable<string> {
    return this.store.select((state) => state.auth.empId);
  }
}
