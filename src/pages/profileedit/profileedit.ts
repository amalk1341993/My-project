import { Component } from '@angular/core';
import { IonicPage,NavController,ViewController,NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profileedit',
  templateUrl: 'profileedit.html',
})
export class ProfileeditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileeditPage');
  }

  dismiss() {
this.viewCtrl.dismiss();
}

}
