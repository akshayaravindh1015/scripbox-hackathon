import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LOGIN_SCHEMA } from 'schema/login.schema';

import { AuthService } from '@core/index';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  state = LOGIN_SCHEMA;
  userNameState = this.state.inputs[0];

  empIdController!: FormControl;

  constructor(private _authServc: AuthService) {}

  ngOnInit(): void {}

  loginHanlder() {
    if (this.empIdController.valid) {
      this._authServc.login();
    }
  }

  captureEmpIdController(controller: FormControl) {
    this.empIdController = controller;
  }
}
