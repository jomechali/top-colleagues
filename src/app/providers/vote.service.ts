import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';
import { LikehateService } from './likehate.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private listVotes: Vote[] = [];

  private _cptHate: number = 0;

  private _cptLike: number = 0;

  constructor(private srvLikeHate: LikehateService, private http: HttpClient) { }

  init() {

    this.listVotes = [{
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
    ]
  }
  findAll(): Observable<Vote[]> {
    return this.http.get<Vote[]>("http://localhost:3000/votes");
  }
  /**

     *

     * @returns Observable<Vote[]> pour | async dans

     * le composant voting-history

     */
  list(): Observable<Vote[]> {
    return this.findAll();
  }

  addVote(vote: Vote) {
    if (vote.vote == LikeHate.HATE) {

      this.srvLikeHate.nextHate(++this._cptHate);

    }

    if (vote.vote == LikeHate.LIKE) {

      this.srvLikeHate.nextLike(++this._cptLike);

    }
    this.listVotes.push(vote);
  }
  removeVote(index: number) {
    this.listVotes.splice(index, 1);
  }
}
