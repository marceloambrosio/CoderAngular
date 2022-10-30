import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    FormAlumnoComponent,
    ListaAlumnosComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
  ]
})
export class AlumnoModule { }
