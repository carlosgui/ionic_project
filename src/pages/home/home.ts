import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  goToSecond(): void {
    this.navCtrl.push('SecondPage', {
      message: 'Hello from home page!'
    });
  }

  goToAbout(): void {
    this.navCtrl.push('AboutPage');
  }

  ionViewDidLoad() {
    console.log('fired once when ... PAGE LOAD');
  }
  ionViewWillEnter() {
    console.log('fired once when ... JUST AS THE PAGE WILL BECAME ACTIVE');
  }
  ionViewDidEnter() {
    console.log('fired each time when ... PAGE ENTERED ');
  }
  ionViewWillLeave() {
    console.log('fired each time when ... THE PAGE IS ABOUT TO LEAVE');
  }
  ionViewDidLeave() {
    console.log('fired when ... THE USER HAS LEFT THE PAGE');
  }

}
