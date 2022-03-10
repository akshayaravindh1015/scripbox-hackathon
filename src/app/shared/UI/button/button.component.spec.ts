import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LOGIN_SCHEMA } from 'schema/login.schema';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create custom button component', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled on passing disable true', () => {
    component.disabled = true;

    fixture.detectChanges();

    const button = el.query(By.css('button'));
    expect(button).toBeTruthy('Button is not present in the button');
    expect(Object.keys(button.attributes)).toContain('disabled');
  });
});
