import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '@core/index';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServc: any;

  beforeEach(async () => {
    const authServcSpy = jasmine.createSpyObj('AuthService', ['login']);
    await TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServcSpy }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authServc = TestBed.inject(AuthService);
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
