import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {
  votestab !: Vote[];
  private _interval : Observable<any>;
  private _subSub : Subscription;

  constructor(public servicevote: VoteService) {

    this._interval = interval(2000);

    this._subSub = this._interval.subscribe(

      ()=>

          this.servicevote.findAll()
          .pipe(
            map(data=>data.reverse())
          )

          .subscribe(

            data  => this.votestab = data)

    );}
  ngOnDestroy(): void {
    this._subSub.unsubscribe();
  }

  ngOnInit(): void {

  }

  removeVote(voteIndex: number) {
    this.servicevote.removeVote(voteIndex);
  }
}
