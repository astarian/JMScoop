import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Mycarpools page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mycarpools',
  templateUrl: 'mycarpools.html'
})
export class Mycarpools {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Mycarpools Page');
  }

}
