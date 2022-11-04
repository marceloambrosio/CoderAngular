import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  {path: '', component: ListaUsuariosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [
    [RouterModule]
  ]
})
export class UsuariosRoutingModule { }
