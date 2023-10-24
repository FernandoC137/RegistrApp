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
  constructor(private alertController: AlertController,private router : Router) { }
  
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
    }
   
    
    
  ]




}
