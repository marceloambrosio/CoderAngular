import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    ToolbarComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
