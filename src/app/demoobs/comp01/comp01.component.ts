import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceaService } from '../servicea.service';

@Component({
  selector: 'tc-comp01',
  templateUrl: './comp01.component.html',
  styleUrls: ['./comp01.component.scss']
})
export class Comp01Component implements OnInit, OnDestroy {

  /**

   * On doit avoir une propriété globale à la classe

   * de Subscription pour faire récupérer le subscribe d'un Observable

   * et aussi de se désabonner.

   */

  actionSub !: Subscription;



  constructor(private srvA: ServiceaService) {

    this.actionSub = this.srvA.actionObs.subscribe(data=>console.log(data));

  /**

     * Comme srvA:ServiceaService est un singleton

     * On empile les souscription !

     *

     */


  }



  ngOnDestroy(): void {

    /**

     * On se désabonne lors de la destruction du composant

     */

    if (!this.actionSub.closed) this.actionSub.unsubscribe();

  }



  ngOnInit(): void {



  }

  lorsDUnEvenement(valeur: string) {

    this.srvA.faitUneAction(valeur);

  }
}
