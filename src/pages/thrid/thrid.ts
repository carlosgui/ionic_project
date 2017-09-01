import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThridPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thrid',
  templateUrl: 'thrid.html',
})
export class ThridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setRootPageToHome(): void {
    this.navCtrl.setRoot('HomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThridPage');
  }

}
