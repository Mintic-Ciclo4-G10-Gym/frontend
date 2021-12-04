import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './crud/departamento/departamento.component';
import { MunicipioComponent } from './crud/municipio/municipio.component';
import { SedeComponent } from './crud/sede/sede.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresarComponent } from './usuario/ingresar/ingresar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { UsuarioComponent } from './crud/usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    MunicipioComponent,
    SedeComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarComponent,
    UsuarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
