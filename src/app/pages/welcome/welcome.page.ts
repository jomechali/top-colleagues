import { Component, OnInit } from '@angular/core';
import { IColleague } from 'src/app/models/icolleague';
import { Vote } from 'src/app/models/vote';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  /**
   * votes generes par tc-impl-colleagues dans tc-colleague-list
   *
   * pb : il faudrait faire deux output enchaines pour remonter l event d ajout commentaire
   * on essaie plutot de passer par ref l array de vote
   *
   * affiche et supprime vote : tc-voting-history
   *
   */

  listColleagues : Array<IColleague> = new Array<IColleague>();
  listVotes : Array<Vote> = new Array<Vote>();

  constructor() { }

   ngOnInit(): void {

    this.listColleagues.push({photo:'assets/logo.png',pseudo:'cge',score:580});

    this.listColleagues.push({photo:'assets/logo.png',pseudo:'speedy',score:80});

    this.listColleagues.push({photo:'assets/logo.png',pseudo:'robert',score:50});

  }

}
