import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { InputProps } from '../input/input.props.model';

@Component({
  selector: 'cust-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss', '../input/input.component.scss'],
})
export class TagsInputComponent implements OnInit {
  @Input() label!: string;
  @Input() props: InputProps = {
    id: `${this.label}_${Math.random().toString()}`,
    type: 'text',
  };

  @Output() onLoad: EventEmitter<FormControl> = new EventEmitter();

  inputController!: FormControl;
  tagsController!: FormControl;
  tags: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.inputController = new FormControl();
    this.tagsController = new FormControl();
    this.onLoad.emit(this.tagsController);
  }

  foucsOutHanlder() {}

  addTag() {
    this.tags.push(this.inputController.value);
    this.inputController.reset();
    this.tagsController.setValue(JSON.stringify(this.tags));
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
    this.tagsController.setValue(JSON.stringify(this.tags));
  }

  get showError(): boolean {
    return this.inputController.touched && this.inputController.invalid;
  }
}
