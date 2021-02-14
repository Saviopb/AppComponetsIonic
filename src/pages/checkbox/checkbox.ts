import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-checkbox',
  templateUrl: 'checkbox.html',
})
export class CheckboxPage {

  azeitona : boolean ;
  martini : boolean ;
  manhattan : boolean ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckboxPage');
  }

  updateAzeitona (){
    console.log("O item Azeitona foi atualizado : " + this.azeitona);
  }
  updateMartini(){
    console.log("O item Martini foi atualizado : " + this.martini );
  }

  updateManhattan(){
    console.log("O item Manhattan foi atualizado : " + this.manhattan );
  }

}
