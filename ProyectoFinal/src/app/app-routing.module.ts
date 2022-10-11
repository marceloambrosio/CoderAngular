import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAlumnoComponent } from './component/form-alumno/form-alumno.component';
import { ListaAlumnosComponent } from './component/lista-alumnos/lista-alumnos.component';

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


