import { Component, Input, OnInit } from '@angular/core';
import { IColleague } from 'src/app/models/icolleague';
import { LikeHate } from 'src/app/models/like-hate';

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

  constructor() { }

  ngOnInit(): void {
  }
  callLikehate(taste: LikeHate) {
    if (taste == LikeHate.LIKE) {
      this.colleague.score += 500;
    } else {
      this.colleague.score -= 500;
    }
  }

}
