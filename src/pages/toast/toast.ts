import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl :ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }
  showToast(position:string){
    let toast = this.toastCtrl.create({
      message: "Mmm, buttered toast",
      duration : 2000,
      position : position
    });
    toast.present(toast);
  }
  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
    message: 'Your files were successfully saved',
    showCloseButton: true,
    closeButtonText: 'Ok'
    });
    toast.present();
    }
    showLongToast(){
      let toast = this.toastCtrl.create({
        message:"Mmm, buttered toast",
        duration :2000
      });
      toast.present();
    }

}
