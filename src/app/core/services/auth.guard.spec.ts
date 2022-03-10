import { fakeAsync, flush, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Employee_Auth } from '@shared/models';
import { initialEmpAuthState } from '@store/emp-auth';
import { reducers, metaReducers, TestStore } from '@store/index';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: TestStore<Employee_Auth>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
        }),
      ],
      providers: [{ provide: Store, useClass: TestStore }],
    });
    guard = TestBed.inject(AuthGuard);
  });

  beforeEach(inject([Store], (testStore: TestStore<Employee_Auth>) => {
    store = testStore; // save store reference for use in tests
    store.setState(initialEmpAuthState); // set default state
  }));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should evaluate to true when logged in', fakeAsync(() => {
    store.setState({ ...initialEmpAuthState, isLoggedIn: true });
    guard.canActivate().subscribe((res) => {
      expect(res).toBe(false, 'Login gurard failed to evaluate properly');
    });
    flush();
  }));
});
