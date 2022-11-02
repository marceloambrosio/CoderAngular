import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaAlumnosService } from 'src/app/alumnos/services/lista-alumnos.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})

export class FormAlumnoComponent implements OnInit {
  registroAlumno: FormGroup;

  constructor(
    private fb: FormBuilder,
    private listaAlumnoService: ListaAlumnosService

  ) {
    this.registroAlumno = fb.group({
      legajo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.email, Validators.required]),
      titulo: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.listaAlumnoService.agregarAlumno(this.registroAlumno.value);
    alert(`¡El alumno se cargo correctamente!`);
    this.registroAlumno.reset();
  }

}