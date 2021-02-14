import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {PrincipalPage } from '../principal/principal'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params:Object;
  pushPage:any;
  constructor(public navCtrl: NavController,
              public actionsheetCtrl : ActionSheetController) {
                this.pushPage = PrincipalPage;
  }
  novaPagina(){
    this.navCtrl.push(PrincipalPage);
  }

}
