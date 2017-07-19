import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingstatusPage } from './bookingstatus';

@NgModule({
  declarations: [
    BookingstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingstatusPage),
  ],
  exports: [
    BookingstatusPage
  ]
})
export class BookingstatusPageModule {}
