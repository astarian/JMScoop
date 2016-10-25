import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the INeedARide page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-i-need-a-ride',
  templateUrl: 'i-need-a-ride.html'
})
export class INeedARide {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello INeedARide Page');
  }

}
