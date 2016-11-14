import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Mycarpools page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mycarpools',
  templateUrl: 'mycarpools.html',
  providers: [AlertController]
})
export class Mycarpools {

	testCheckboxOpen: boolean;
  testCheckboxResult: boolean;

  constructor(public alertCtrl: AlertController) { }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'James Madison has requested to join your carpool',
      message: 'Click accept to add rider to your carpool, or deny.',
      buttons: [
        {
          text: 'Deny',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Accept',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
