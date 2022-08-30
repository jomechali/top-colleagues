import { Injectable } from '@angular/core';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';
import { LikehateService } from './likehate.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private listVotes: Vote[] = [];

  private _cptHate :number = 0;

  private _cptLike :number = 0;

  constructor(private srvLikeHate:LikehateService) { }

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

  list(): Vote[] {
    return this.listVotes;
  }

  addVote(vote: Vote) {
    if(vote.vote == LikeHate.HATE) {

      this.srvLikeHate.nextHate(++this._cptHate);

    }

    if(vote.vote == LikeHate.LIKE) {

      this.srvLikeHate.nextLike(++this._cptLike);

    }
    this.listVotes.push(vote);
  }
  removeVote(index: number) {
    this.listVotes.splice(index, 1);
  }
}
