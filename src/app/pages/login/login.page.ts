import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  constructor(private alertController: AlertController) { }
  ngOnInit() {
  }
  async mostrarMensaje(){
    const alert = await this.alertController.create({
      header: 'Confirmado!!',
      message: 'Ingreso exitoso!',
      buttons: ['OK'],
    });
    await alert.present();
  }


confirmar(){
 
  this.mostrarMensaje();}
}
