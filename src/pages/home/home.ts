import { Component     } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Needride      } from '../needride/needride';
import { Driving       } from '../driving/driving';
import { Mycarpools    } from '../mycarpools/mycarpools';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController){
	}

	needride(){ this.navCtrl.push(Needride); }

	driving() { this.navCtrl.push(Driving); }

	mycarpools(){ this.navCtrl.push(Mycarpools); }

}
