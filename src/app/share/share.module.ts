import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListaAlumnosComponent } from '../lista-alumnos/components/lista-alumnos.component';
import { FormAlumnoComponent } from '../form-alumno/components/form-alumno.component';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';
import { SizeTituloDirective } from '../directives/size-titulo.directive';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
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
