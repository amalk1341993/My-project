import { Component } from '@angular/core';
import { IonicPage,NavController,ViewController,ModalController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bookingstatus',
  templateUrl: 'bookingstatus.html',
})
export class BookingstatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingstatusPage');
  }
  dismiss() {
this.viewCtrl.dismiss();
}

navigation() {
  let modal = this.modalCtrl.create('MapPage');
  modal.present();
  }

}
