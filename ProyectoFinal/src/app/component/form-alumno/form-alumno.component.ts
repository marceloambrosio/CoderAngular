import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})

export class FormAlumnoComponent implements OnInit {
registroAlumno: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.registroAlumno = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.email, Validators.required]),
      esProfesional: new FormControl('', [Validators.required]),
   })
  }
  ngOnInit(): void {
  }

  agregarAlumno(){
    console.log(this.registroAlumno)
  }
}