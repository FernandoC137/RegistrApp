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

export interface IAlumnos{
    id:number;
    nombre:String;
    correo: String;
    jornada: String;
    role: String;
    contrasena: String;
    carrera: String;
}

export interface IAlumno {
    nombre: string;
    correo: string;
    jornada: string;
    role: string;
    contrasena: string;
    carrera: String;
  }
  export interface IAsignatura {
    nombre: String;
    periodo: String;
    horasSemanales: number;
  }
  

export interface IFeriado{
    id:number;
    dia:String;
    causa: String;
    

}