import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/pipes/nombre-apellido.pipe';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  edicionAlumno!: FormGroup;
  alumno$!: Observable<Alumno>;

  constructor(
    private AlumnoService: AlumnosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      let legajo = parseInt(parametros.get('legajo') || '0');
      this.alumno$ = this.AlumnoService.getAlumno(legajo);

/*       this.edicionAlumno = new FormGroup({
        legajo: new FormControl(parametros.get('legajo'), [Validators.required]),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
        correo: new FormControl(parametros.get('correo'), [Validators.required]),
        titulo: new FormControl(parametros.get('titulo'), [Validators.required]),
      }) */
    })
  }

  editarAlumno() {
    let a: Alumno = {
      //legajo: this.edicionAlumno.value.legajo,
      nombre: this.edicionAlumno.value.nombre,
      apellido: this.edicionAlumno.value.apellido,
      //correo: this.edicionAlumno.value.correo,
      //titulo: this.edicionAlumno.value.titulo,
    };
    //this.ListaAlumnoService.editarAlumno(a);
    this.router.navigate(['lista'])
  }
}
