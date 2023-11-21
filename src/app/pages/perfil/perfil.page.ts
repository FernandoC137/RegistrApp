import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicio/api.service';
import { AlumnoService } from 'src/app/servicio/alumno.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user={
    nombre:"",}

  docente={
    id:0,
    nombre:"",
    correo:"",
    contrasena:"",
    jornada:"",
    role:"",
    asignatura:""
  }
  alumno={
    id:0,
    nombre:"",
    correo:"",
    contrasena:"",
    role:"",
    carrera:"",
    jornada:""
  }
   constructor(private menuController: MenuController,
              private apiService: ApiService,
              private AlumnoService: AlumnoService,) {
     
   }
 
   ngOnInit() {
   }
   mostrarMenu(){
     this.menuController.open('first');
   }
 
   loggedIn(){
    return sessionStorage.getItem('ingresado')!=null;
  }
  nombre(){
    return sessionStorage.getItem('username'); 
  }
  correo(){
    return sessionStorage.getItem('correo'); 
  }
  actualizar(){
    if (sessionStorage.getItem('role') =='docente'){
      this.apiService.GetUserById(this.correo).subscribe(
        (resp:any)=>{                 
          console.log(resp);
          this.docente={
            id: resp[0].id,
            nombre: resp[0].nombre,
            role: resp[0].role,
            correo: resp[0].correo,
            contrasena: resp[0].contrasena,
            jornada: resp[0].jornada,
            asignatura: resp[0].asignatura,
          }
        })
        this.docente.nombre = this.user.nombre;

      this.apiService.Actualizar(this.docente).subscribe();
    }
    else{
      this.AlumnoService.GetUserById(this.correo).subscribe(
        (resp:any)=>{                 
          console.log(resp);
          this.alumno={
            id: resp[0].id,
            nombre: resp[0].nombre,
            role: resp[0].role,
            correo: resp[0].correo,
            contrasena: resp[0].contrasena,
            jornada: resp[0].jornada,
            carrera: resp[0].carrera,
          }
        })
        this.alumno.nombre = this.user.nombre;

      this.AlumnoService.Actualizar(this.alumno).subscribe();
    }
  }
 }
 