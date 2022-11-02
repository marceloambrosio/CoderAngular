import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports:[
  ]
})
export class ListaAlumnosModule { }
