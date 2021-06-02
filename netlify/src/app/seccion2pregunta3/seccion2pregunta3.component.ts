import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';

import { Pregunta_Paciente } from '../service/Pregunta_Paciente'
import { Historia } from '../service/Historia';
import { Pregunta } from '../service/Pregunta';
import { Contador } from '../service/Contador';
import { Paciente } from '../service/Paciente';

@Component({
  selector: 'app-seccion2pregunta3',
  templateUrl: './seccion2pregunta3.component.html',
  styleUrls: ['./seccion2pregunta3.component.css']
})
export class Seccion2pregunta3Component implements OnInit {

  constructor(private router: Router, private AdminService:AdminService) {
    this.getPregunta()
   }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }
 
  getPregunta():void{
     this.AdminService.getPreguntas(7).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
     
  }

  

  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta7', respuesta);
    this.router.navigate(['/prediccion2seccion2']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta7', respuesta);
      this.router.navigate(['/prediccion2seccion2']);
      }
    
      reiniciar():void{
        for(var i=2;i<=7;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
