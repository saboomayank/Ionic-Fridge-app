import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemList = []
  archiveList = []

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
  clearList(archiveList){
    archiveList.splice(0,archiveList.length)
  }

  addItem(itemForm){
    const obj = itemForm.value;
    if(obj.itemName !== ''){
      // todo code
      this.itemList.push(obj.itemName);
      //reset form
      itemForm.reset();
    }else{
      this.presentAlert()
    }
  }


}
