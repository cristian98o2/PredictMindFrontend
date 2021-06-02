import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';

@Component({
  selector: 'app-seccion2pregunta1',
  templateUrl: './seccion2pregunta1.component.html',
  styleUrls: ['./seccion2pregunta1.component.css']
})
export class Seccion2pregunta1Component implements OnInit {
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
     this.AdminService.getPreguntas(5).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
     
  }
  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta5', respuesta);
    this.router.navigate(['/prediccion1seccion2']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta5', respuesta);
      this.router.navigate(['/seccion2pregunta2']);
      }

      reiniciar():void{
        for(var i=2;i<=5;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
