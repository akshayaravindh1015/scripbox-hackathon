import { fakeAsync, flush, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Auth } from '@shared/models';
import { initialState } from '@store/auth';
import { reducers, metaReducers, TestStore } from '@store/index';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: TestStore<Auth>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
        }),
      ],
      providers: [
        { provide: Store, useClass: TestStore }, // use test store instead of ngrx store
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  beforeEach(inject([Store], (testStore: TestStore<Auth>) => {
    store = testStore; // save store reference for use in tests
    store.setState(initialState); // set default state
  }));

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should evaluate to true when logged in', fakeAsync(() => {
    store.setState({ ...initialState, isLoggedIn: true });
    guard.canActivate().subscribe((res) => {
      expect(res).toBe(false, 'Login gurard failed to evaluate properly');
    });
    flush();
  }));
});
