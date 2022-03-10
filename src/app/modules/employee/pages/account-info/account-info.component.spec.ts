import {
  ComponentFixture,
  fakeAsync,
  flush,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { Employee_Auth } from '@shared/models';
import { reducers, metaReducers } from '@store/index';
import { TestStore } from '@store/test-store';

import { AccountInfoComponent } from './account-info.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;
  let fixture: ComponentFixture<AccountInfoComponent>;
  let store: TestStore<any>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountInfoComponent],
      imports: [
        StoreModule.forRoot(reducers, {
          metaReducers,
        }),
      ],
      providers: [{ provide: Store, useClass: TestStore }],
    }).compileComponents();
  });

  beforeEach(inject([Store], (testStore: TestStore<any>) => {
    fixture = TestBed.createComponent(AccountInfoComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    store = testStore; // save store reference for use in tests
    store.setState({}); // set default state
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load correct employee id', fakeAsync(() => {
    component.ngOnInit();
    const testEmpId = '54321';
    store.setState({ auth: { empId: testEmpId, isLoggedIn: true } });
    tick(1000);
    flush();
    fixture.detectChanges();

    const empIdText = el.query(By.css('#employee-id')).nativeElement
      .textContent;
    expect(empIdText).toBe(
      testEmpId,
      'Employee Id is incorrectly shown in the Account Info'
    );
  }));
});
