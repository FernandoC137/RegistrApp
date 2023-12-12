import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


interface Componente{
  name:string;
  redirecTo: string;
  icon:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController,
              private router : Router) { }
  
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Registro!!',
      message: 'Cómo desea registrarse!',
      buttons: [
        {
          text: 'Alumno',
          handler: () => {
            this.router.navigateByUrl('/registration');
          }
        },
        {
          text: 'Profesor',
          handler: () => {
            this.router.navigateByUrl('/registro-docente');
          }
        },
        
      ]
    });
  
    await alert.present();
  }
  tipo_registro(){
   
    this.mostrarMensaje();}

  async Mensaje() {
      const alert = await this.alertController.create({
        header: 'Login!!',
        message: 'Cómo desea realizar el login!',
        buttons: [
          {
            text: 'Alumno',
            handler: () => {
              this.router.navigateByUrl('/login-a');
            }
          },
          {
            text: 'Profesor',
            handler: () => {
              this.router.navigateByUrl('/login');
            }
          },
          
        ]
      });
    
      await alert.present();
    }
    tipo_login(){
     
      this.Mensaje();}
    
  
  

  
  componentes : Componente[]=[
    {
      name: 'inicio',
      redirecTo: '/inicio',
      icon: 'home-outline'
    },{

      name: 'login',
      redirecTo: '/login',
      icon: 'cloud-outline'
    },
    {
      name: 'registrarse',
      redirecTo: '/registration',
      icon: 'person-outline'
    },
    
    {
      name: 'informacion',
      redirecTo: '/information',
      icon: 'alert-outline'
    },
    {
      name: 'feriados',
      redirecTo: '/feriados',
      icon: 'calendar-outline'
    },
    {
      name: 'qr',
      redirecTo: '/qr',
      icon: 'qr-code-outline'
    },
    {
      name: 'perfil',
      redirecTo: '/perfil',
      icon: 'person'
    }
    ,
    {
      name: 'recuperacion de contraseña',
      redirecTo: '/contrasena',
      icon: 'lock-closed'
    }

  ]




}
