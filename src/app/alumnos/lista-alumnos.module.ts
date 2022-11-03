import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ShareModule,
    AlumnosRoutingModule
  ],
  exports:[
  ]
})
export class ListaAlumnosModule { }
