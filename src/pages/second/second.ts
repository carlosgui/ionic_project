import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

    message: String;
    personName: String;

  constructor(private navCtrl: NavController, private navParams: NavParams, private toast: ToastController) {
      this.message = this.navParams.get('message');
      alert(this.message);
  }

  showGreeting(name: string){
    console.log(name);
    console.log(this.personName);
    this.toast.create({message: `HELLO ${name}`, duration: 3000 }).present();
  }

  navigateBack(): void {
    this.navCtrl.pop();
  }

  navigateToThridPage(): void {
    this.navCtrl.push('ThridPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
