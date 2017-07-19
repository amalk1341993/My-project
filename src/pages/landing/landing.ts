import { Component } from '@angular/core';
import { IonicPage,NavController,ModalController,NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  pending() {
    let modal = this.modalCtrl.create('BookingstatusPage');
    modal.present();
    }

}
