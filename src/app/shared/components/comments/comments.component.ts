import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState, empId$, challenge$ } from '@store/index';
import { ModifyChallengeService } from '@challenges/services/modify-challenge.service';
import { Comment } from '@shared/models';
import { addComment } from '@store/challenges';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cust-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  @Input() challengeId!: string;

  comments: Comment[] = [];

  constructor(
    private _modifyChallengeServc: ModifyChallengeService,
    private store: Store<AppState>
  ) {}

  commentController!: FormControl;
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = this.store
      .select(challenge$(this.challengeId))
      .subscribe((challenge) => {
        this.comments = challenge.comments;
      });
  }

  captureCommentController(cntrlr: FormControl) {
    this.commentController = cntrlr;
  }
  addComment() {
    this.store.select(empId$).subscribe((empId) => {
      const commentObj: Comment = {
        commentText: this.commentController.value,
        addedBy: empId,
      };
      this._modifyChallengeServc
        .addComments(this.challengeId, commentObj)
        .subscribe(() => {
          this.store.dispatch(
            addComment({ challengeId: this.challengeId, comment: commentObj })
          );
          this.commentController.reset();
        });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
