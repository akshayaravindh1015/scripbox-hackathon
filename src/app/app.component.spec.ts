import { StoreModule } from '@ngrx/store';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { reducers, metaReducers } from '@store/index';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot(reducers, {
            metaReducers,
          }),
        ],
        declarations: [AppComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(AppComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
        });
    })
  );

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
