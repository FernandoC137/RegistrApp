export interface IDocentes{
    id:number;
    nombre:String;
    correo: String;
    jornada: String;
    role: String;
    contrasena: String;
    asignaturas: IAsignatura[];
}

export interface IDocente {
    nombre: string;
    correo: string;
    jornada: string;
    role: string;
    contrasena: string;
    asignaturas: IAsignatura[];
  }
  export interface IAsignatura {
    nombre: string;
    periodo: string;
    horasSemanales: number;
  }
  

export interface IFeriado{
    id:number;
    dia:String;
    causa: String;
    

}