import { Injectable } from '@angular/core';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private listVotes: Vote[] = [];

  constructor() { }

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
    this.listVotes.push(vote);
  }
  removeVote(index: number) {
    this.listVotes.splice(index, 1);
  }
}
