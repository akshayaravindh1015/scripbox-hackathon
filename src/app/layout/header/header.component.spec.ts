import { DebugElement } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { Store, StoreModule } from '@ngrx/store';
import { Employee_Auth } from '@shared/models';
import { initialEmpAuthState } from '@store/emp-auth';
import { reducers, metaReducers, TestStore } from '@store/index';
import { AuthService } from '@core/index';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;
  let store: TestStore<Employee_Auth>;

  beforeEach(async () => {
    const authServSpyObj = jasmine.createSpyObj('AuthService', ['logOut']);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        StoreModule.forRoot(reducers, {
          metaReducers,
        }),
      ],
      providers: [
        { provide: Store, useClass: TestStore },
        { provide: AuthService, useValue: authServSpyObj },
      ],
    }).compileComponents();
  });
  beforeEach(inject([Store], (testStore: TestStore<Employee_Auth>) => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    store = testStore; // save store reference for use in tests
    store.setState(initialEmpAuthState); // set default state
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo', () => {
    const logo = el.query(By.css('.logo'));
    expect(logo).toBeTruthy('Logo is not present in the header');
  });

  it('should hide user actoins if not logged in', () => {
    const actions = el.query(By.css('.user-actions'));
    expect(actions).toBeFalsy(
      'User actions are incorrectly shown in the header'
    );
  });
});
