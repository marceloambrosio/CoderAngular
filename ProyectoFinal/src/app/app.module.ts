import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NombreApellidoPipe } from './alumno/pipes/nombre-apellido.pipe';
import { SizeTituloDirective } from './directives/size-titulo.directive';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';


@NgModule({
  declarations: [
    AppComponent,
    NombreApellidoPipe,
    SizeTituloDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    NgbModule,
    ShareModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
