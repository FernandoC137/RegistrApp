import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IDocente, IDocentes } from '../pages/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }


  //obtenemos un observable de acuerdo al username ingresado en login
  GetUserById(correo:any):Observable<IDocente>{
    return this.httpclient.get<IDocente>(`${environment.apiURL}/docente/?correo=${correo}`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }
  CrearDocente(newDocente: IDocente): Observable<IDocente>{
    return this.httpclient.post<IDocente>(`${environment.apiURL}/docente`, newDocente);
  }
  Actualizar(usuario:any):Observable<IDocente>{
    return this.httpclient.put<IDocente>(`${environment.apiURL}/docente/${usuario.id}`, usuario);
  }
}
