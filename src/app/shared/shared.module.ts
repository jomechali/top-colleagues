import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ImplColleagueComponent } from '../shared/components/impl-colleague/impl-colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';
import { LikeDislikeSentencePipe } from '../shared/pipes/like-dislike-sentence.pipe';
import { CounterComponent } from '../shared/components/counter/counter.component';


/**

 * Tous les éléments d'un module qui sont privés

 * pour les autres modules

 * donc on utilise : exports : [] dans @NgModule

 * pour que ce soit public

 */
@NgModule({
  declarations: [LikeHateComponent, ImplColleagueComponent, ColleagueListComponent, ScorePipe, VotingHistoryComponent, LikeDislikeSentencePipe, CounterComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeHateComponent, ImplColleagueComponent, ColleagueListComponent, ScorePipe, VotingHistoryComponent, CounterComponent]
})
export class SharedModule { }
