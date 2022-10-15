import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './component/lista-alumnos/lista-alumnos.component';
import { FormAlumnoComponent } from './component/form-alumno/form-alumno.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { SizeTituloDirective } from './directives/size-titulo.directive';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    FormAlumnoComponent,
    NombreApellidoPipe,
    SizeTituloDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
