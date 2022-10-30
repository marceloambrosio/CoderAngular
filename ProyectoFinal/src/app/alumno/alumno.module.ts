import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ShareModule } from '../share/share.module';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';
import { SizeTituloDirective } from '../directives/size-titulo.directive';


@NgModule({
  declarations: [
    FormAlumnoComponent,
    ListaAlumnosComponent,
    NombreApellidoPipe,
    SizeTituloDirective,
  ],
  imports: [
    CommonModule,
    ShareModule,
  ]
})
export class AlumnoModule { }
