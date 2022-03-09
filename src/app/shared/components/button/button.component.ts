import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cust-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() type: string = 'primary';
  @Input() shape: string = ';';
  constructor() {}

  ngOnInit(): void {}
}
