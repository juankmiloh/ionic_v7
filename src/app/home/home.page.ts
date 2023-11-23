import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  async openPage() {
    const alert = await this.alertCtrl.create({
      header: 'Products',
      message: 'You have 300 products',
      buttons: ['Ok']
    });

    await alert.present();
  }

  async openLoading() {
    const  loading = await this.loadingCtrl.create({
      message: 'Cargando carrito...',
      spinner: 'crescent',
      duration: 2000
    })

    await loading.present();
  }

}
