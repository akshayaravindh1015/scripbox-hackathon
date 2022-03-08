import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LOGIN_SCHEMA } from 'schema/login.schema';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  state = LOGIN_SCHEMA;
  userNameState = this.state.inputs[0];
  constructor() {}

  ngOnInit(): void {}
}
