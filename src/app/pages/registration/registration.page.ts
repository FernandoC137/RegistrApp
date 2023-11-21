import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlumnoService } from 'src/app/servicio/alumno.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  alumno={
    nombre:"",
    correo:"",
    contrasena:"",
    role:"alumno",
    carrera:"",
    jornada:""
  }
  loginForm: FormGroup;

  constructor(private alertController: AlertController,
              private AlumnoService:AlumnoService,
              private formBuilder: FormBuilder) {
                this.loginForm = this.formBuilder.group({
                  nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
                  correo: ['', [Validators.required, Validators.email]],
                  contrasena: [
                    '',
                    [
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(16),
                      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                    ]
                  ],
                  jornada: ['', Validators.required],
                  carrera: ['', [Validators.required,
                     Validators.minLength(4), 
                     Validators.maxLength(50)]]
                });
              }


  Enviar(): void {
    this.alumno.nombre = this.loginForm.value.nombre;
    this.alumno.correo = this.loginForm.value.correo;
    this.alumno.contrasena = this.loginForm.value.contrasena;
    this.alumno.carrera = this.loginForm.value.carrera;
    this.alumno.jornada = this.loginForm.value.jornada;
    this.AlumnoService.CrearDocente(this.alumno).subscribe();
    this.mostrarMensaje();
  }

  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!!',
      message: 'Sus datos han sido enviados!' ,
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnInit() {
  }
}



