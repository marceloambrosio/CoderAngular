import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/pipes/nombre-apellido.pipe';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {
  edicionAlumno!: FormGroup;

  constructor(
    private ListaAlumnoService: ListaAlumnosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.edicionAlumno = new FormGroup({
        legajo: new FormControl(parametros.get('legajo'), [Validators.required]),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido'), [Validators.required]),
        correo: new FormControl(parametros.get('correo'), [Validators.required]),
        titulo: new FormControl(parametros.get('titulo'), [Validators.required]),
      })
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
