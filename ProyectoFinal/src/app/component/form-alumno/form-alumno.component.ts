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
      titulo: new FormControl('', [Validators.required]),
   });
  }
  ngOnInit(): void {
  }

  agregarAlumno(){
    this.setAlumnoLocalStorage(this.registroAlumno)
    alert(`¡El alumno se cargo correctamente!`)
    this.registroAlumno.reset()
    /* alumnoJson: {
      apellido: this.registroAlumno.get('apellido')?.value;
      correo: this.registroAlumno.get('correo')?.value;
      titulo: this.registroAlumno.get('titulo')?.value;
    } */
    //this.setAlumnoLocalStorage(this.registroAlumno)
    //    this.registroAlumno.reset()
  }
  
  
  setAlumnoLocalStorage(nuevoAlumno: FormGroup){
    const nombre = JSON.stringify(nuevoAlumno.get('nombre')?.value)
    const apellido = JSON.stringify(nuevoAlumno.get('apellido')?.value)
    const mail = JSON.stringify(nuevoAlumno.get('correo')?.value)
    const titulo = JSON.stringify(nuevoAlumno.get('titulo')?.value)
    const alumno = {nombre:nombre, apellido:apellido,mail:mail,titulo:titulo}

    let datosExistentes = [];
    datosExistentes = JSON.parse(localStorage.getItem('alumno')||'{}');
    let datosJson = [];
    datosJson = Array.from(datosExistentes)
    datosJson.push(alumno)

    localStorage.setItem('alumno', JSON.stringify(datosJson))
  }
  
}