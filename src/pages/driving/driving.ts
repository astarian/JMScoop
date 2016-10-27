import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Driving page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driving',
  templateUrl: 'driving.html'
})
export class Driving {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Driving Page');
  }

}
