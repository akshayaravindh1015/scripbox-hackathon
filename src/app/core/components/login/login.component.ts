import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LOGIN_SCHEMA } from 'schema/login.schema';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  state = LOGIN_SCHEMA;
  userNameState = this.state.inputs[0];

  empIdController!: FormControl;

  constructor() {}

  ngOnInit(): void {}

  loginHanlder() {
    if (this.empIdController.valid) {
    }
  }

  captureEmpIdController(controller: FormControl) {
    this.empIdController = controller;
  }
}
