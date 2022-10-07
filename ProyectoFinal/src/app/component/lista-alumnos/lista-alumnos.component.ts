import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: Array<Alumno> = [
    { nombre: 'Esteban', apellido: 'Roganti', mail: 'esteban@asd.com',esProfesional: true },
    { nombre: 'Juan', apellido: 'Lopez', mail: 'juan@asd.com', esProfesional: true },
    { nombre: 'Jose', apellido: 'Gomez', mail: 'jose@asd.com', esProfesional: false },
    { nombre: 'Julio', apellido: 'Perez', mail: 'julio@asd.com', esProfesional: true },
    { nombre: 'Nahuel', apellido: 'Bruno', mail: 'nahuel@asd.com', esProfesional: true },
    { nombre: 'Lorena', apellido: 'Fuentes', mail: 'lorena@asd.com', esProfesional: true },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
