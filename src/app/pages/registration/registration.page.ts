import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  usuario={
    nombre:'',
    email:'',
    edad:'',
    password:'',
    username:'',
    rut:'',
    carrera:'',
    jornada:''
  }


  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async mostrarMensaje(){
      const alert = await this.alertController.create({
        header: 'Gracias!!',
        message: 'Sus datos han sido enviados!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  

  Enviar(){
   
    this.mostrarMensaje();
    this.usuario.nombre='';
    this.usuario.username='';
    this.usuario.email='';
    this.usuario.rut='';
    this.usuario.password='';
    this.usuario.edad='';
    this.usuario.jornada='';
    this.usuario.carrera='';
    

  }



}