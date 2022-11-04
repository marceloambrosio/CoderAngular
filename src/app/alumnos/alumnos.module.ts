import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { InicioAlumnoComponent } from './components/inicio-alumno/inicio-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { MaterialModule } from '../material.module';
import { AlumnosService } from './services/alumnos.service';



@NgModule({
  declarations: [
    InicioAlumnoComponent,
    EditarAlumnoComponent,
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ShareModule
  ],
  exports:[
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ShareModule
  ],
  providers:[
    AlumnosService
  ]
})
export class AlumnosModule { }
