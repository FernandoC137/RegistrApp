import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/servicio/api.service';
import { IDocente, IAsignatura } from '../Interfaces/interfaces';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})
export class RegistroDocentePage implements OnInit {

  loginForm: FormGroup;

  docente: IDocente = {
    nombre: "",
    correo: "",
    contrasena: "",
    jornada: "",
    asignaturas: [],
    role: "docente"
  };

  asignatura: IAsignatura = {
    nombre: "",
    horasSemanales: 0,
    periodo: ''
  };

  constructor(
    private alertController: AlertController,
    private apiService: ApiService,
    private builder: FormBuilder
  ) {
    this.loginForm = this.builder.group({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50)
      ]),
      correo: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      contrasena: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]),
      jornada: new FormControl("", [
        Validators.required
      ]),
      asignaturas: this.builder.array([this.createItem(), this.createItem()])
  });
  }

  createItem(): FormGroup {
    return this.builder.group({
      nombreAsignatura:['',
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)],
      horasSemanales: ['',
       Validators.required],
      periodo: ['',
      Validators.required,
      Validators.minLength(6)],
    });
  }

  get asignaturas() {
    return this.loginForm.get('asignaturas') as FormArray;
  }

  addAsignatura(): void {
    const control = this.loginForm.controls['asignaturas'] as FormArray;
    control.push(this.createItem());
  }

  Enviar(): void {
    this.docente.asignaturas = this.loginForm.value.asignaturas;
    this.apiService.CrearDocente(this.docente).subscribe();
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