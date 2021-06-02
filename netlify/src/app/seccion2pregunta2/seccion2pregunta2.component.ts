import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';

@Component({
  selector: 'app-seccion2pregunta2',
  templateUrl: './seccion2pregunta2.component.html',
  styleUrls: ['./seccion2pregunta2.component.css']
})
export class Seccion2pregunta2Component implements OnInit {
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
     this.AdminService.getPreguntas(6).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
     
  }
  guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta6', respuesta);
    this.router.navigate(['/seccion2pregunta3']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta6', respuesta);
      this.router.navigate(['/seccion2pregunta3']);
      }

      reiniciar():void{
        for(var i=2;i<=6;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}
