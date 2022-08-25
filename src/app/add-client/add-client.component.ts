import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  personne !: Personne;
  /*
  nomClient!: string;
  prenomClient!: string;
  adresseClient!: string;
  */
  clients: Array<Personne> = new Array<Personne>();

  constructor() { }

  ngOnInit(): void {
    this.personne = new Personne("vide", "vide", "vide");
    /*
    this.nomClient = "vide";
    this.prenomClient = "vide";
    this.adresseClient = "vide";
    */
  }

  registerClient() {
    /*let client: any = {
      "nom": this.nomClient,
      "prenom": this.prenomClient,
      "adresse": this.adresseClient
    }
    this.clients.push(client);

    console.log(this.clients);*/

    this.clients.push({...this.personne});
  }
}
