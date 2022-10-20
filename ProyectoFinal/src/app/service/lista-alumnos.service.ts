import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {
  listaAlumnos = JSON.parse(localStorage.getItem('alumno') || '{}');

  private alumnos: Alumno[] = [this.listaAlumnos];
  private alumnos$: Subject<Alumno[]>;


  constructor() {
    //this.alumnos = [];
    this.alumnos$ = new Subject();
  }

  agregarAlumno(nuevoAlumno: Alumno) {
    let datosExistentes = [];
    datosExistentes = JSON.parse(localStorage.getItem('alumno')||'{}');
    let datosJson = [];
    datosJson = Array.from(datosExistentes)
    datosJson.push(nuevoAlumno)
    localStorage.setItem('alumno', JSON.stringify(datosJson))
    this.alumnos$.next(this.alumnos);

    //alert(`¡El alumno se cargo correctamente!`);
    //this.registroAlumno.reset();
  }

  getAlumnos$(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

}


