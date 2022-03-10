import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddChallengeService } from '@employee/services/add-challenge.service';
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

  isLoading: boolean = false;

  constructor(private _addChallengeServc: AddChallengeService) {}

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
  }
  submitTheIdea() {
    this.isLoading = true;
    this._addChallengeServc
      .addANewChallenge({
        title: this.titleController.value,
        desc: this.descController.value,
        tags: this.tagsController.value,
        upvotes: 0,
        downvotes: 0,
        comments: [],
      })
      .subscribe(
        () => {
          this.closeFn();
          this.isLoading = false;
        }, // Success in handling
        () => {}, // No need to handle errors - already handled in the sevice
        () => {
          this.closeFn();
          this.isLoading = false;
        }
      );
  }
}
