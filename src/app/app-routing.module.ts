import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './crud/departamento/departamento.component';
import { MunicipioComponent } from './crud/municipio/municipio.component';
import { SedeComponent } from './crud/sede/sede.component';
import { UsuarioComponent } from './crud/usuario/usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { IngresarComponent } from './usuario/ingresar/ingresar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  { path:'', component: IngresarComponent },
  { path:'#', component: InicioComponent }, 
  { path:'inicio', component: InicioComponent }, 
  { path:'registrar', component: RegistrarComponent },
  { path:'municipio', component: MunicipioComponent },
  { path:'departamento', component: DepartamentoComponent },
  { path:'sede', component: SedeComponent },
  { path:'usuario', component: UsuarioComponent },
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
