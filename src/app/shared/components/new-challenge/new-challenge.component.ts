import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { AppState, empId$ } from '@store/index';
import { NEW_CHALLENGE_SCHEMA } from 'schema/new-challenge.schema';
import { AddChallengeService } from '@challenges/index';

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
  empId: string = '';

  constructor(
    private _addChallengeServc: AddChallengeService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(empId$)
      .subscribe((id) => (this.empId = id))
      .unsubscribe();
  }

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
        id: '',
        empId: this.empId,
        title: this.titleController.value,
        desc: this.descController.value,
        tags: this.tagsController.value,
        upvotes: [],
        downvotes: [],
        comments: [],
        createdAt: new Date(),
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
