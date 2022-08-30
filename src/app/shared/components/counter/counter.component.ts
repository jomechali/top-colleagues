import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { LikehateService } from 'src/app/providers/likehate.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  cptHate: number = 0;
  cptLike: number = 0;

  private _hateSubs: Subscription;
  private _likeSubs: Subscription;

  constructor(srvLikeHate : LikehateService) {
    this._hateSubs = srvLikeHate.subHate.subscribe(
      cpt => this.cptHate = cpt
    );
    this._likeSubs = srvLikeHate.subLike.subscribe(
      cpt => this.cptLike = cpt
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._hateSubs.unsubscribe();
    this._likeSubs.unsubscribe();
  }

  /*likeCount: number = 0;
  dislikeCount: number = 0;

  likehateSubject: Subject<LikeHate> = new Subject<LikeHate>();

  constructor() { }

  ngOnDestroy(): void {
    if (!this.likehateSubject.closed) {
      this.likehateSubject.unsubscribe();
    }

  }

  ngOnInit(): void {
    this.likehateSubject.subscribe({
      next: (likeHateEvent) => {
        if (likeHateEvent == LikeHate.LIKE) {
          this.likeCount++;
        } else {
          this.dislikeCount++
        }
      }

    })
  }

  onLikeHateVote(likeHateVote : LikeHate) {
    this.likehateSubject.next(likeHateVote);
  }*/

}
