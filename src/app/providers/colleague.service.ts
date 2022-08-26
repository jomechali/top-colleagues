import { Injectable } from '@angular/core';
import { IColleague } from '../models/icolleague';
import { Vote } from '../models/vote';
import { VoteService } from './vote.service';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private listColleagues: IColleague[] = [];
  constructor(private serviceVote: VoteService) {

    this.init();

  }
  init() {

    this.listColleagues.push({ photo: 'assets/logo.png', pseudo: 'cge', score: 580 });

    this.listColleagues.push({ photo: 'assets/logo.png', pseudo: 'speedy', score: 80 });

    this.listColleagues.push({ photo: 'assets/logo.png', pseudo: 'robert', score: 50 });

  }

  list(): IColleague[] {
    //TODO use mock

    return this.listColleagues;
  }

  addColleague(colleague:IColleague):void {
    this.listColleagues.push(colleague);
  }

  addVote(vote:Vote){
    this.serviceVote.addVote(vote);

  }
}
