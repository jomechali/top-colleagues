import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ImplColleagueComponent } from '../shared/components/impl-colleague/impl-colleague.component';
import { ColleagueListComponent } from '../shared/components/colleague-list/colleague-list.component';


/**

 * Tous les éléments d'un module qui sont privés

 * pour les autres modules

 * donc on utilise : exports : [] dans @NgModule

 * pour que ce soit public

 */
@NgModule({
  declarations: [LikeHateComponent, ImplColleagueComponent, ColleagueListComponent],
  imports: [
    CommonModule
  ],
  exports: [LikeHateComponent, ImplColleagueComponent, ColleagueListComponent]
})
export class SharedModule { }
