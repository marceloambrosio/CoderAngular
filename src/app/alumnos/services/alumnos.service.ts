import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Alumno } from '../../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService implements OnInit {

  private alumnos!: Alumno[];
  private alumnos$ = new BehaviorSubject(this.alumnos);


  constructor() {
    this.alumnos = JSON.parse(localStorage.getItem('alumno') || '{}');
    this.alumnos$ = new BehaviorSubject(this.alumnos);
    this.alumnos$.next(this.alumnos);
  }

  ngOnInit() {
  }

  agregarAlumno(nuevoAlumno: Alumno) {
    let datosExistentes = [];
    datosExistentes = JSON.parse(localStorage.getItem('alumno') || '{}');
    let datosJson = [];
    datosJson = Array.from(datosExistentes)
    datosJson.push(nuevoAlumno)
    localStorage.setItem('alumno', JSON.stringify(datosJson))
    this.alumnos = JSON.parse(localStorage.getItem('alumno') || '{}');
    this.alumnos$.next(this.alumnos);
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  getAlumno(legajo: number){
    return this.getAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter((alumno: Alumno) => alumno.legajo === legajo)[0])
    )
  }

  getAlumnosPromise(): Promise<Alumno[]> {
    return new Promise((resolve, reject) => {
      if (this.alumnos.length > 0) {
        resolve(this.alumnos);
      } else {
        reject({
          mensaje: "No hay alumnos cargados"
        })
      }
    }
    )
  }

  editarAlumno(alumno: Alumno) {
    let legajo = this.alumnos.findIndex((a: Alumno) => a.legajo === alumno.legajo);
    if (legajo > -1) {
      this.alumnos[legajo] = alumno;
    }

    this.alumnos$.next(this.alumnos);
  }

  eliminarAlumno(legajo: number) {
    let legajoAlumno = this.alumnos.findIndex((a: Alumno) => a.legajo === legajo);
    if (legajo > -1) {
      this.alumnos.splice(legajoAlumno, 1);
    }
    this.alumnos$.next(this.alumnos);
  }

}


