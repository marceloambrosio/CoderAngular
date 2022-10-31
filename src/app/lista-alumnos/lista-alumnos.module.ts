import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { NombreApellidoPipe } from '../pipes/nombre-apellido.pipe';
import { SizeTituloDirective } from '../directives/size-titulo.directive';



@NgModule({
  declarations: [
    NombreApellidoPipe,
    SizeTituloDirective,
  ],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports:[
    NombreApellidoPipe,
    SizeTituloDirective,
  ]
})
export class ListaAlumnosModule { }
