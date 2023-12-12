import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
 qrCodeString: 'asistencia';
  constructor(private menuController: MenuController) {
    this.qrCodeString = 'asistencia';
  }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  
}
