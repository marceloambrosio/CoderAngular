import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ListaAlumnosComponent } from './component/lista-alumnos/lista-alumnos.component';
import { FormAlumnoComponent } from './component/form-alumno/form-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    ListaAlumnosComponent,
    FormAlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
