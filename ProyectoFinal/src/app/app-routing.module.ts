import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAlumnoComponent } from './form-alumno/components/form-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/components/lista-alumnos.component';

const routes: Routes = [
  { path: 'form', component: FormAlumnoComponent },
  { path: 'lista', component: ListaAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }


