import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { InputService } from './input.service';
import { InputProps, Validation } from './input.props.model';

@Component({
  selector: 'cust-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label!: string;
  @Input() props: InputProps = {
    id: `${this.label}_${Math.random().toString()}`,
    type: 'text',
  };
  @Input() validations: Validation[] = [];
  @Input() initialValue: string = '';

  @Output() onLoad: EventEmitter<FormControl> = new EventEmitter();

  inputController!: FormControl;
  errorMessage: string = '';

  constructor(private _inputServc: InputService) {}

  ngOnInit(): void {
    this.inputController = new FormControl(this.initialValue, {
      validators: this._inputServc.getValidationFuns(this.validations),
      // updateOn: 'blur',
    });
    this.onLoad.emit(this.inputController);
    this.inputController.valueChanges.subscribe(this.inputChanges.bind(this));
    this.inputController.statusChanges.subscribe(this.inputChanges.bind(this));
  }

  private inputChanges() {
    if (this.inputController.invalid) {
      if (!!this.inputController.errors) {
        const error = Object.keys(this.inputController.errors)[0];
        const index = this.validations.findIndex((vldn) => vldn.name === error);
        if (index != -1) {
          this.errorMessage = this.validations[index].errorMessage;
        }
      }
    }
  }

  foucsOutHanlder() {
    this.inputChanges();
    // (event.target as HTMLInputElement).value
  }

  get showError(): boolean {
    return this.inputController.touched && this.inputController.invalid;
  }
}
