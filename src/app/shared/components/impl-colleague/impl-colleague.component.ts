import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IColleague } from 'src/app/models/icolleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-impl-colleague',
  templateUrl: './impl-colleague.component.html',
  styleUrls: ['./impl-colleague.component.scss']
})
export class ImplColleagueComponent implements OnInit {

  @Input() colleague: IColleague = {
    pseudo: 'pseudo colleague',
    score: 0,
    photo: 'assets/logo.png'
  };

  @Output() emetVote:EventEmitter<Vote> = new EventEmitter<Vote>();
  constructor() { }

  ngOnInit(): void {
  }
  callLikehate(taste: LikeHate) {
    if (taste == LikeHate.LIKE) {
      this.colleague.score += 500;
    } else {
      this.colleague.score -= 500;
    }
    this.emetVote.emit({colleague:{...this.colleague}, vote:taste});
  }

}
