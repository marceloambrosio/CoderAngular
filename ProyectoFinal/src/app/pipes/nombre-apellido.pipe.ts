import { Pipe, PipeTransform } from '@angular/core';

export type Alumno ={
  nombre: String;
  apellido: String;
}

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value: Alumno): string {
    return `${value.nombre} ${value.apellido}`;
  }

}
