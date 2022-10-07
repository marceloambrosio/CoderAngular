import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
registroPostulante: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.registroPostulante = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.min(25), Validators.required]),
      correo: new FormControl('', [Validators.email, Validators.required]),
      titulo: new FormControl('', [Validators.required]),

    })
   }

  ngOnInit(): void {
  }

  agregarPostulante(){
    console.log(this.registroPostulante);
  }

}
