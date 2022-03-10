import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LOGIN_SCHEMA } from 'schema/login.schema';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct label', () => {
    const state = LOGIN_SCHEMA.inputs[0];
    component.label = state.label;

    fixture.detectChanges();

    const label = el.query(By.css('label'));
    expect(label).toBeTruthy('Label is not present in the input');
    expect(label.nativeElement.textContent).toBe(
      state.label,
      'Label is not correct in the input'
    );
  });

  // it('should successfully populate intial value', () => {
  //   const state = LOGIN_SCHEMA.inputs[0];
  //   component.label = state.label;
  //   const testValue = '123';
  //   component.initialValue = testValue;

  //   fixture.detectChanges();

  //   const input = el.query(By.css('input'));
  //   expect(input).toBeTruthy('Input Field is not present in the input');
  //   console.log(input);
  //   // expect(input.nativeElement.value).toBe(
  //   //   testValue,
  //   //   'Input Field is not present in the input'
  //   // );
  // });
});
