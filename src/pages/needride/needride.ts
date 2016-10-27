import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Needride page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-needride',
  templateUrl: 'needride.html'
})
export class Needride {

public firstParam:any;
  public secondParam:any;
  constructor(public navCtrl: NavController,public params:NavParams) {
       this.firstParam = params.get("firstPassed");
      this.secondParam = params.get("secondPassed");
  }

  ionViewDidLoad() {
    console.log('Hello Needride Page');
  }

}
