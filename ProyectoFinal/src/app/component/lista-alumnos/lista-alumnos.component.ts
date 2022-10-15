import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: Array<Alumno> = [
    { nombre: 'Esteban', apellido: 'Roganti', mail: 'esteban@asd.com',titulo: "Secundario" },
    { nombre: 'Juan', apellido: 'Lopez', mail: 'juan@asd.com', titulo: "Terciario" },
    { nombre: 'Jose', apellido: 'Gomez', mail: 'jose@asd.com', titulo: "Secundario" },
    { nombre: 'Julio', apellido: 'Perez', mail: 'julio@asd.com', titulo: "Universitario" },
    { nombre: 'Nahuel', apellido: 'Bruno', mail: 'nahuel@asd.com', titulo: "Universitario" },
    { nombre: 'Lorena', apellido: 'Fuentes', mail: 'lorena@asd.com', titulo: "Secundario" },
  ];
  columnas: string[] = ['alumno', 'mail', 'titulo'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.listaAlumnos);

  constructor() { }

  ngOnInit(): void {
  }

}
