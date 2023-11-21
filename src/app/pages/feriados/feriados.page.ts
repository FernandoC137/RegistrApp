import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { FeriadoService } from 'src/app/servicio/feriado.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IFeriado } from '../Interfaces/interfaces';
@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit{

  
  feriados:IFeriado[]=[];

  constructor(private menuController: MenuController,
              private FeriadoService: FeriadoService,
              private loadingCtrl : LoadingController)  { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  ionViewWillEnter(){
    this.loadAnimalitos();
    }
  
    async loadAnimalitos(event?: InfiniteScrollCustomEvent){
      
      const loading = await this.loadingCtrl.create({
        message: "Cargando..",
        spinner: "bubbles"
      });
      await loading.present();
  
  
      this.FeriadoService.listarFeriado().subscribe(
        {
          next: resp=>{
            console.log(resp);
           loading.dismiss();
            let listString = JSON.stringify(resp)
            this.feriados=JSON.parse(listString)
            event?.target.complete();
            console.log(this.feriados);
            
          },
          error: err =>{
            console.log(err.error.message);
           loading.dismiss();
          }
        }
      ) 
    }


}
