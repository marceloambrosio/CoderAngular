import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListaAlumnosComponent } from '../alumnos/components/lista-alumnos/lista-alumnos.component';
import { FormAlumnoComponent } from '../form-alumno/components/form-alumno.component';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';
import { SizeTituloDirective } from '../directives/size-titulo.directive';
import { AlumnosModule } from '../alumnos/alumnos.module';


@NgModule({
  declarations: [
    FormAlumnoComponent,
    NombreApellidoPipe,
    SizeTituloDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NombreApellidoPipe,
    SizeTituloDirective
  ]

})
export class ShareModule { }
