import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Seccion1pregunta1Component} from './seccion1pregunta1/seccion1pregunta1.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PsicologoComponent } from './psicologo/psicologo.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
