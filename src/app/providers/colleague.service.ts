import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IColleague } from '../models/icolleague';
import { Vote } from '../models/vote';
import { VoteService } from './vote.service';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private listColleagues: IColleague[] = [];
  /**

   *

   * @param servicevote

   * @param http : je récupére l'injection HttpClient

   * pour pouvoir communiquer avec notre BackEnd.

   */

  constructor(

    //private servicevote:VoteService,

    private http: HttpClient) {

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

  addColleague(colleague: IColleague): void {
    this.listColleagues.push(colleague);
  }

  addVote(vote: Vote) {
    //this.serviceVote.addVote(vote);
    this.http.post<Vote>("http://localhost:3000/votes", vote)
      .subscribe({
        next: vote => console.log(vote),

        error: error => console.log(error)
      })
  }
}
