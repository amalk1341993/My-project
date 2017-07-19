import { Component } from '@angular/core';
import { IonicPage,NavController,ModalController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  status() {
    let modal = this.modalCtrl.create('StatusPage');
    modal.present();
    }

}
