import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  nomClient!: string;
  prenomClient!: string;
  adresseClient!: string;

  private _clients: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit(): void {
    this.nomClient = "";
    this.prenomClient = "";
    this.adresseClient = "";
  }

  registerClient() {
    let client: any = {
      "nom": this.nomClient,
      "prenom": this.prenomClient,
      "adresse": this.adresseClient
    }
    this._clients.push(client);

    console.log(this._clients);
    /*
    this._clients.push(this.nomClient);
    this._clients.push(this.prenomClient);
    this._clients.push(this.adresseClient);
    */
  }
}
