import { Pipe, PipeTransform } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';

@Pipe({
  name: 'likeDislikeSentence'
})
export class LikeDislikeSentencePipe implements PipeTransform {

  transform(vote:Vote): string {
    let sentence = `${vote.colleague.pseudo} est ${(vote.vote == LikeHate.LIKE)?"aimé":"detesté"}, et a désormais un score de ${vote.colleague.score} ${(vote.colleague.score >= 0)?":-)":":-("}`;
    return sentence;
  }

}
