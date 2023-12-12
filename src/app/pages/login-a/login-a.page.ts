import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlumnoService } from 'src/app/servicio/alumno.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.page.html',
  styleUrls: ['./login-a.page.scss'],
})
export class LoginAPage implements OnInit {

  userdata: any;
  alumno={
    id:0,
    nombre:"",
    correo:"",
    contrasena:"",
    role:"",
    carrera:"",
    jornada:""
  }


  loginForm: FormGroup;

  constructor(private AlumnoService: AlumnoService, 
              private router: Router,
              private alertcontroller: AlertController, 
              private toastcontroller: ToastController,
              private builder: FormBuilder) { 
                this.loginForm = this.builder.group({
                  'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(4)])
                })
               }

  ngOnInit() {
  }

  login(){
    console.log("Codificando login");
    if (this.loginForm.valid){
      this.AlumnoService.GetUserById(this.loginForm.value.username).subscribe(resp=>{ 
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){      //el objeto que buscamos existe en JSON
          this.alumno = {
            id: this.userdata[0].id,
            nombre: this.userdata[0].nombre,
            contrasena: this.userdata[0].contrasena,
            jornada:this.userdata[0].jornada,
            correo:this.userdata[0].correo,
            carrera:this.userdata[0].carrera,
            role: this.userdata[0].role}
          //  isactive: this.userdata[0].isactive
          
          if (this.alumno.contrasena === this.loginForm.value.password){
          //  if (this.docente.isactive){
              sessionStorage.setItem('username', this.alumno.nombre);
              sessionStorage.setItem('correo', this.alumno.correo);
              sessionStorage.setItem('role', this.alumno.role);
              
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl('/inicio');
            //}
           // else{
        //      this.UserInactivo();
           //   this.loginForm.reset();
           // }
          }
          else{
            this.DatoError();
            this.loginForm.reset();
          }

        }
        else{
          this.Noexiste();
          this.loginForm.reset();
        }

      })
    }
  }//login

  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 3000
    });
    toast.present();
  }

  async UserInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error..',
      message: 'Usuario inactivo, contacte a admin@admin.cl',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async DatoError(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error..',
      message: 'Revise sus credenciales',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  async Noexiste(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Debe registrarse',
      message: 'Usuario no existe',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }


}

