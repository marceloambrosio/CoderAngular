import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/model/alumno';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {

  arrayAlumnos!: Alumno[];
  alumnos$ = this.AlumnoService.getAlumnos()
  alumnosPromise = this.AlumnoService.getAlumnosPromise()
  columnas: string[] = ['legajo','alumno', 'correo', 'titulo', 'acciones'];
  dataSource = new MatTableDataSource(this.arrayAlumnos)

  alumnosSubscription!: Subscription

  constructor(
    private AlumnoService: AlumnosService,
    private router: Router,
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

  eliminarAlumno(legajo: number){
    this.AlumnoService.eliminarAlumno(legajo);
  }

  editarAlumno(alumno: Alumno){
    this.router.navigate(['lista/editar', {alumno}
    /* {
      legajo: alumno.legajo,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      correo: alumno.correo,
      titulo: alumno.titulo,
    } */
  ])
  }

}
