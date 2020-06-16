import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemList = ['bread','cake','milk']
  archiveList = ['foo1','foo','bar']

  constructor(private alertController:AlertController,private vibration: Vibration) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please enter a item.',
      buttons: ['OK']
    });

    await alert.present();
  }

  archive(value,index){
    this.itemList.splice(index,1)
    this.archiveList.push(value)
  }

  delete(index){
    this.itemList.splice(index,1)
    this.vibration.vibrate(1000);
  }

  addItem(itemForm){
    const obj = itemForm.value;
    if(obj.itemName !== ''){
      // todo code
      this.itemList.push(obj.itemName);
    }else{
      this.presentAlert()
    }
  }


}
