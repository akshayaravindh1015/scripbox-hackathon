import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { Store } from '@ngrx/store';

import { BackendService } from '@shared/services/backend.service';
import { AppState } from '@store/index';
import { login, logOut } from '@store/emp-auth';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmpData, empDataFromFactory } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private _backendServc: BackendService
  ) {}

  login(empId: string) {
    const EMP_END_POINT = `${environment.api.endpoints.employees}/${empId}`;
    this.checkIfNewUserElsePopulate(empId).subscribe((isNewUser) => {
      if (isNewUser) {
        this._backendServc.putCall(EMP_END_POINT, { empId: empId }).subscribe(
          () => {
            this.store.dispatch(
              login({ empData: empDataFromFactory({ empId: empId }) })
            );
            // this.router.navigate(['/challenges/list']);
            this.router.navigate(['/challenges/list']);
          },
          (error) => {}
        );
      } else {
        // this.router.navigate(['/challenges/list']);
        this.router.navigate(['/challenges/list']);
      }
    });
  }

  checkIfNewUserElsePopulate(empId: string): Observable<boolean> {
    const EMP_END_POINT = `${environment.api.endpoints.employees}/${empId}`;
    return this._backendServc.getCall(EMP_END_POINT).pipe(
      map((data: any) => {
        if (!!data) {
          this.store.dispatch(
            login({
              empData: empDataFromFactory(data),
            })
          );
          return false;
        } else {
          return true;
        }
      }),
      catchError((error) => of(true))
    );
  }

  logOut() {
    this.store.dispatch(logOut());
    this.router.navigate(['/login']);
  }
}
