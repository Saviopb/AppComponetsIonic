import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  login: string ="";
  senha: string = "";
  mensagem: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }

  enviar(campoLogin, campoSenha){
    this.login = campoLogin;
    this.senha = campoSenha;
    this.mensagem = 'Seus dados foram enviados';
  }
}
