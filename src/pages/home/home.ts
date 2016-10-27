import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Needride } from '../needride/needride';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController){
	}

	navigate(){ this.navCtrl.push(Needride); }

}
