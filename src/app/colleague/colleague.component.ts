import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html'
})
export class ColleagueComponent implements OnInit {

  /**
   * declare une entree nom pour la balise du composant
   */
  @Input() nom: string = "";
  @Input("prenom") monPrenom: string = "";

  @Output() chgPrenom: EventEmitter<string> = new EventEmitter<string>();

  uneImage = 'assets/logo.png';
  unChamps !: string;//= 'je suis un champs ts';

  saisieTwoWay: string = "valeur par defaut";

  constructor() { }

  ngOnInit(): void {

    this.saisieTwoWay = this.nom;
    console.log(this.monPrenom);
  }

  mClique(valeurSaisie: string) {
    this.unChamps = valeurSaisie;
    this.chgPrenom.emit(this.unChamps);

    console.log('clic bien reçu : ', valeurSaisie);
  }

}
