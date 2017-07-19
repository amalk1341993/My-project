import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage,NavController,ViewController,NavParams } from 'ionic-angular';
declare var google;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  dismiss() {
this.viewCtrl.dismiss();
}

loadMap(){

   let latLng = new google.maps.LatLng(-34.9290, 138.6010);

   let mapOptions = {
     center: latLng,
     zoom: 15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

 }

}
