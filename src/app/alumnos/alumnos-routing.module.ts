import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
    {path: 'lista', component: ListaAlumnosComponent, children: [
        {path: 'editar', component: EditarAlumnoComponent}
    ]}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlumnosRoutingModule { }