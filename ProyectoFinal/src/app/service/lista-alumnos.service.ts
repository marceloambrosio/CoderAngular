import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService implements OnInit{

  private alumnos!: Alumno[];
  private alumnos$: Subject<Alumno[]> = new BehaviorSubject(this.alumnos);


  constructor() {
    this.alumnos = JSON.parse(localStorage.getItem('alumno') || '{}');
    this.alumnos$.next(this.alumnos);
    this.alumnos$ = new BehaviorSubject(this.alumnos);
  }
  
  ngOnInit(){
  }

  agregarAlumno(nuevoAlumno: Alumno) {
    let datosExistentes = [];
    datosExistentes = JSON.parse(localStorage.getItem('alumno') || '{}');
    let datosJson = [];
    datosJson = Array.from(datosExistentes)
    datosJson.push(nuevoAlumno)
    localStorage.setItem('alumno', JSON.stringify(datosJson))
    this.alumnos$.next(this.alumnos);

    //alert(`¡El alumno se cargo correctamente!`);
    //this.registroAlumno.reset();
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  getAlumnosPromise(): Promise<Alumno[] | Alumno> {
    return new Promise((resolve, reject) => {
      if (this.alumnos.length >0) {
        resolve(this.alumnos);
      } else {
        reject({
          mensaje: "No hay alumnos cargados"
        })
      }
    }
    )
  }

}


