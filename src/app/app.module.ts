import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperacionComponent } from './componentes/operacion/operacion.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaComponent } from './componentes/consulta/consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    OperacionComponent,
    HeaderComponent,
    MainComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
