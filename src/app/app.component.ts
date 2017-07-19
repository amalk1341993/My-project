import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any ='LoginPage';
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public modalCtrl: ModalController) {
  this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

logout() {
  this.nav.setRoot('LoginPage');
  }

editprofile() {
  let modal = this.modalCtrl.create('ProfileeditPage');
  modal.present();
  }

booking() {
  this.nav.setRoot('BookingPage');
  }

  landing() {
    this.nav.setRoot('LandingPage');
    }


}
