import { Component } from '@angular/core';

import {Page, NavController} from 'ionic-angular';
import { INeedARide } from '../pages/i-need-a-ride/i-need-a-ride';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(nav: NavController){
			this.nav = nav;
		}
	goToINeedARide(){
		this.nav.push(INeedARide);
	}

}
