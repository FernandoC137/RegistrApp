import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private alertController: AlertController,private router : Router , private menuController: MenuController) { }
  
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Registro!!',
      message: 'Cómo desea registrarse!',
      buttons: [
        {
          text: 'Alumno',
          handler: () => {
            this.router.navigateByUrl('/registration');
            console.log("ola");
          }
        },
        {
          text: 'Profesor',
          handler: () => {
            this.router.navigateByUrl('/registro-docente');
            console.log("ola");
          }
        },
        
      ]
    });

    
    await alert.present();
  }
  tipo_registro(){
   
    this.mostrarMensaje();}




  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  loggedIn(){
    return sessionStorage.getItem('ingresado')!=null;
  }
  
  cerrarSesion() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('ingresado');
  
}
  bienvenido(){
    return sessionStorage.getItem('username'); 
  }
}
