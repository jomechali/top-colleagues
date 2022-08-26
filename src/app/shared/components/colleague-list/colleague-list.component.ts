import { Component, Input, OnInit } from '@angular/core';
import { IColleague } from 'src/app/models/icolleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {
  /*
    @Input() colleagues: Array<IColleague> = new Array<IColleague>();
    @Input() listVotes: Array<Vote> = new Array<Vote>();
  */
 /**
  *
  * @param colleagueService injection du singleton du service colleagueService
  * public pour l utiliser dans le template html
  */
  constructor(public colleagueService:ColleagueService) {
  }

  ngOnInit(): void {
  }

  callVote(vote: Vote) {
    this.colleagueService.addVote(vote);

  }

}
