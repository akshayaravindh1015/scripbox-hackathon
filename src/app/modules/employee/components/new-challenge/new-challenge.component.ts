import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NEW_CHALLENGE_SCHEMA } from 'schema/new-challenge.schema';

@Component({
  selector: 'new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.scss'],
})
export class NewChallengeComponent implements OnInit {
  @Input() closeFn: Function = () => {};

  state = NEW_CHALLENGE_SCHEMA;
  titleState = this.state.inputs[0];
  descState = this.state.inputs[1];
  tagsState = this.state.inputs[2];

  titleController!: FormControl;
  descController!: FormControl;
  tagsController!: FormControl;

  constructor() {}

  ngOnInit(): void {}

  captureTitleController(controller: FormControl) {
    this.titleController = controller;
  }
  captureDescController(controller: FormControl) {
    this.descController = controller;
  }
  captureTagsController(controller: FormControl) {
    this.tagsController = controller;
  }

  cancelAddingNewChallenge() {
    this.closeFn();
    this.resetForm();
  }
  submitTheIdea() {
    console.log(this.tagsController.value);
    this.resetForm();
    this.closeFn();
  }

  resetForm() {
    // this.titleController.reset();
    // this.descController.reset();
    // this.tagsController.reset();
  }
}
