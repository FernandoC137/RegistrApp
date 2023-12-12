import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {

  email: string = '';
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  resetPassword(email: string) {
    this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        // Email de restablecimiento enviado correctamente
      })
      .catch(error => {
        // Manejar el error
      });
  }
}
