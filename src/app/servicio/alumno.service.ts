import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAlumno, IAlumnos } from '../pages/Interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private httpclient: HttpClient) { }


  //obtenemos un observable de acuerdo al username ingresado en login
  GetUserById(correo:any):Observable<IAlumno>{
    return this.httpclient.get<IAlumno>(`${environment.apiURL}/alumno/?correo=${correo}`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }
  CrearDocente(newDocente: IAlumno): Observable<IAlumno>{
    return this.httpclient.post<IAlumno>(`${environment.apiURL}/alumno`, newDocente);
  }
  Actualizar(usuario:any):Observable<IAlumno>{
    return this.httpclient.put<IAlumno>(`${environment.apiURL}/alumno/${usuario.id}`, usuario);
  }
}
