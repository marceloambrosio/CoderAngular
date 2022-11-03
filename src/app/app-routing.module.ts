import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormAlumnoComponent } from './form-alumno/components/form-alumno.component';
import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';
import { EditarAlumnoComponent } from './alumnos/components/editar-alumno/editar-alumno.component';

const routes: Routes = [
  { path: 'form', component: FormAlumnoComponent },
  { path: 'lista', component: ListaAlumnosComponent, 
  children:[{path: 'editar', component: EditarAlumnoComponent}]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }


