import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { SizeTituloDirective } from '../directives/size-titulo.directive';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';



@NgModule({
  declarations: [
    SizeTituloDirective,
    NombreApellidoPipe,
  ],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports:[
    SizeTituloDirective,
    NombreApellidoPipe,
  ]
})
export class ListaAlumnosModule { }
