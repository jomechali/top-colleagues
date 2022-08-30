import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceaService } from '../servicea.service';

@Component({
  selector: 'tc-comp02',
  templateUrl: './comp02.component.html',
  styleUrls: ['./comp02.component.scss']
})
export class Comp02Component implements OnInit, OnDestroy {

  /**

   * On doit avoir une propriété globale à la classe

   * de Subscription pour faire récupérer le subscribe d'un Observable

   * et aussi de se désabonner.

   */

  actionSub !: Subscription;
  dataHtml: string = "";



  constructor(private srvA: ServiceaService) {



    this.actionSub = this.srvA.actionObs.subscribe(

      {

        next: (data: string) => {

          this.dataHtml = data;

        },

        error: (error: string) => {

          console.log(error)

        },

        complete: () => {

          //FIN

        }

      }

    );

  }



  ngOnDestroy(): void {

    /**

     * On se désabonne lors de la destruction du composant

     */

    if (!this.actionSub.closed) this.actionSub.unsubscribe();

  }



  ngOnInit(): void {



  }

}
