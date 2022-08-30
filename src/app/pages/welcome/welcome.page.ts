import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, ReplaySubject, Subject } from 'rxjs';
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

  /*listColleagues: Array<IColleague> = new Array<IColleague>();
  listVotes: Array<Vote> = new Array<Vote>();*/

  constructor() { }

  ngOnInit(): void {
    /*
        this.listColleagues.push({photo:'assets/logo.png',pseudo:'cge',score:580});

        this.listColleagues.push({photo:'assets/logo.png',pseudo:'speedy',score:80});

        this.listColleagues.push({photo:'assets/logo.png',pseudo:'robert',score:50});
    */

    this.useObservable();
    this.useSubject03();
  }

  useObservable() {
    let myObservable = new Observable(observer => {
      setTimeout(() => observer.next('Jo'), 1000);
      setTimeout(() => observer.next('JoJO'), 2000);
      setTimeout(() => observer.complete(), 3000);
    })

    myObservable.subscribe({
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('termine')

    })
  }
  /**

    * On ne peut pas faire de complete (de désabonnement)

    * directement sur Observable.

    */

  useSubject00() {
    /**
     * Attention demo!!!
     * il manque l arret de l intervalle et le complete
     * car tout est local?
     */
    let myTimer = interval(1000);
    let mySubject = new Subject();

    myTimer.subscribe(mySubject);//appelle les fcts de l objet

    mySubject.subscribe(value => console.log(value));//ce callback est le next

    mySubject.next('mot');
  }

  useSubject01() {
    let mySubject = new Subject();
    mySubject.next('Mot 01');
    mySubject.next('Mot 02');
    //ces deux next ne sont pas vus car il n y a pas encore de subscribe
    mySubject.subscribe(value => console.log(value)); //next :

    mySubject.next('Mot 03');

    mySubject.complete();

  }
  useSubject02() {
    let mySubject = new ReplaySubject();
    mySubject.next('Mot 01');
    mySubject.next('Mot 02');
    //la ils sont historises
    mySubject.subscribe(value => console.log(value)); //next :

    mySubject.next('Mot 03');

    mySubject.complete();//penser a liberer les ressources asynchrones

  }
  useSubject03() {
    let mySubject = new BehaviorSubject<number>(0);
    mySubject.next(1);
    mySubject.next(2);
    /**

    * Il garde la dernière valeur

    * on s'en sert la plupart du temps

    * pour savoir qui est connecté ou

    * récupérer le tolen en cours etc...

    * dans un service

    */
    mySubject.subscribe(value => console.log(value)); //next :

    mySubject.next(3);

    mySubject.complete();//penser a liberer les ressources asynchrones

  }


}
