import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, from } from 'rxjs';
import { Alumno } from 'src/app/model/alumno';
import { ListaAlumnosService } from 'src/app/service/lista-alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos=JSON.parse(localStorage.getItem('alumno')||'{}');
/*   listaAlumnos: Array<Alumno> = [
    { nombre: 'Esteban', apellido: 'Roganti', mail: 'esteban@asd.com',titulo: "Secundario" },
    { nombre: 'Juan', apellido: 'Lopez', mail: 'juan@asd.com', titulo: "Terciario" },
    { nombre: 'Jose', apellido: 'Gomez', mail: 'jose@asd.com', titulo: "Secundario" },
    { nombre: 'Julio', apellido: 'Perez', mail: 'julio@asd.com', titulo: "Universitario" },
    { nombre: 'Nahuel', apellido: 'Bruno', mail: 'nahuel@asd.com', titulo: "Universitario" },
    { nombre: 'Lorena', apellido: 'Fuentes', mail: 'lorena@asd.com', titulo: "Secundario" },
  ];
 */  columnas: string[] = ['alumno', 'correo', 'titulo'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.listaAlumnos);

  constructor() { }

  ngOnInit(): void {
    from(this.listaAlumnos).pipe(
      //filter((alumno: Alumno[]) => alumno.apellido === 'Lopez')
    )
  }

}
