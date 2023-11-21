import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFeriado } from '../pages/Interfaces/interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  constructor(private httpclient:HttpClient) { }

  listarFeriado():Observable<IFeriado>{
    return this.httpclient.get<IFeriado>(`${environment.apiURL}/feriado`);
  }
}
