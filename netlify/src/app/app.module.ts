import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ContentChildren, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { PaginaPsicologoComponent } from './pagina-psicologo/pagina-psicologo.component';
import { Service } from './serviceSpring/service'
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {  AngularMultiSelectModule  }  from  'angular2-multiselect-dropdown';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearPreguntaComponent } from './crear-pregunta/crear-pregunta.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { HistorialComponent } from './historial/historial.component';
import { DetalleHistorialComponent } from './detalle-historial/detalle-historial.component' ;
import { PaginadorComponent } from './paginador/paginador.component';
import { EstadisticaPacientesComponent } from './estadistica-pacientes/estadistica-pacientes.component';
import { EstadisticaHistoriasComponent } from './estadistica-historias/estadistica-historias.component';



registerLocaleData(localeES,'es');
const routes: Routes=  [
{path:'',component: LoginComponent, canActivate:[NoLoginGuard]},
{path:'login',component: LoginComponent, canActivate:[NoLoginGuard]},
{path:'',component: LoginComponent, canActivate:[LoginGuard]},
{path:'paginaPsicologo',component:PaginaPsicologoComponent, canActivate: [LoginGuard]},
{path:'introduccion',component:IntroduccionComponent, canActivate: [LoginGuard]},
{path:'crearCliente',component:CrearClienteComponent, canActivate: [LoginGuard]},
{path:'crearCliente/:id',component:CrearClienteComponent, canActivate: [LoginGuard]},
{path:'crearPregunta',component:CrearPreguntaComponent, canActivate: [LoginGuard]},
{path:'encuesta',component:EncuestaComponent, canActivate: [LoginGuard]},
{path:'historial/:id',component:HistorialComponent, canActivate: [LoginGuard]},
{path:'historial/:id/:page',component:HistorialComponent, canActivate: [LoginGuard]},
{path:'detalleHist/:id',component:DetalleHistorialComponent, canActivate: [LoginGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PaginaPsicologoComponent,
    CrearClienteComponent,
    CrearPreguntaComponent,
    EncuestaComponent,
    HistorialComponent,
    PaginadorComponent,
    DetalleHistorialComponent,
    EstadisticaPacientesComponent,
    EstadisticaHistoriasComponent
  ],
  imports: [
    AngularMultiSelectModule ,
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgxChartsModule
  ],
  providers: [
    LoginGuard,NoLoginGuard,
    Service,
    {provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
