import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { InicioAlumnoComponent } from './components/inicio-alumno/inicio-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
    {path: '', component: InicioAlumnoComponent, children: [
        {path: 'editar', component: EditarAlumnoComponent},
        {path: 'lista', component: ListaAlumnosComponent}
    ]}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlumnosRoutingModule { }