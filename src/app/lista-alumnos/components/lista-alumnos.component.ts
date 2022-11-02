import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/model/alumno';
import { ListaAlumnosService } from 'src/app/lista-alumnos/services/lista-alumnos.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {

  arrayAlumnos!: Alumno[];
  alumnos$ = this.listaAlumnoService.getAlumnos()
  alumnosPromise = this.listaAlumnoService.getAlumnosPromise()
  columnas: string[] = ['legajo','alumno', 'correo', 'titulo', 'acciones'];
  dataSource = new MatTableDataSource(this.arrayAlumnos)

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
