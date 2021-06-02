import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';


@Component({
  selector: 'app-seccion1pregunta2',
  templateUrl: './seccion1pregunta2.component.html',
  styleUrls: ['./seccion1pregunta2.component.css']
})
export class Seccion1pregunta2Component implements OnInit {

  constructor(private router: Router, private AdminService : AdminService) { 
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
     this.AdminService.getPreguntas(3).then(function(data){
       console.log(data)
       document.getElementById("prueba").firstChild.textContent = data.descripcion
       
     })
    }
      guardarRespuestaSI(respuesta){
    localStorage.setItem( 'respuesta3', respuesta);
    this.router.navigate(['/seccion1pregunta3']);
    }

    guardarRespuestaNO(respuesta){
      localStorage.setItem( 'respuesta3', respuesta);
      this.router.navigate(['/seccion1pregunta3']);
      }
    
      reiniciar():void{
        for(var i=2;i<=3;i++){
          localStorage.removeItem('respuesta'+i);
        }
      }
}

