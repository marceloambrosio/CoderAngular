import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter, from, Subscription } from 'rxjs';
import { Alumno } from 'src/app/model/alumno';
import { ListaAlumnosService } from 'src/app/service/lista-alumnos.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {

  
  arrayAlumnos!: Alumno[] | null;
  alumnos$ = this.listaAlumnoService.getAlumnos()
  alumnosPromise = this.listaAlumnoService.getAlumnosPromise()
  //listaAlumnos=JSON.parse(localStorage.getItem('alumno')||'{}');
  columnas: string[] = ['alumno', 'correo', 'titulo'];
  //dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.arrayAlumnos);

  alumnosSubscription!: Subscription

  constructor(
    private listaAlumnoService: ListaAlumnosService
  ) { }

  ngOnDestroy(): void {
    this.alumnosSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.alumnosSubscription = this.alumnos$.subscribe({
      next: alumnos => {
        this.arrayAlumnos = alumnos
      }
    });
  }
}
