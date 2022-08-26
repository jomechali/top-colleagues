import { Component, Input, OnInit } from '@angular/core';
import { IColleague } from 'src/app/models/icolleague';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

  @Input() colleagues: Array<IColleague> = new Array<IColleague>();
  @Input() listVotes: Array<Vote> = new Array<Vote>();

  constructor() {/*
    this.colleagues.push({
      pseudo: 'colleague1',
      score: 1,
      photo: 'assets/logo.png'
    })
    this.colleagues.push({
      pseudo: 'colleague2',
      score: 2,
      photo: 'assets/logo.png'
    })
    this.colleagues.push({
      pseudo: 'colleague3',
      score: 3,
      photo: 'assets/logo.png'
    })
    this.colleagues.push({
      pseudo: 'colleague4',
      score: 4,
      photo: 'assets/logo.png'
    })*/
  }

  ngOnInit(): void {
  }

  callVote(vote: Vote) {
    this.listVotes.push(vote);
  }

}
