import { Component } from '@angular/core';
import { NavController,IonicPage,ViewController,NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  dismiss() {
this.viewCtrl.dismiss();
}

}
