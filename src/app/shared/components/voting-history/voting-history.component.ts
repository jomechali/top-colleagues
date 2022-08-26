import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  @Input() voteList: Array<Vote> = [];
  constructor() { }

  ngOnInit(): void {
    /* [{
    colleague: {
      pseudo: 'colleague1',
      score: 1,
      photo: 'assets/logo.png'
    },
    vote: LikeHate.LIKE
  },
  {
    colleague: {
      pseudo: 'colleague2',
      score: 50,
      photo: 'assets/logo.png'
    },
    vote: LikeHate.HATE
  }
]*/
  }

  removeVote(voteIndex: number) {
    this.voteList.splice(voteIndex, 1);
  }
}
