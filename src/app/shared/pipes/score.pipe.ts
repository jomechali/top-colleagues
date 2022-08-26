import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  /**
   *
   * @param score
   * @returns +120 -50
   */
  transform(score:number): string {
    let scoreFormater : string = "";

    if (score >= 0) {
      scoreFormater = `+ ${Math.abs(score)}`;
    } else {
      scoreFormater = `- ${Math.abs(score)}`;
    }
    return scoreFormater;
  }

}
