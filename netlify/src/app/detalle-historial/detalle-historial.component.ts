import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PreguntaHistoria } from '../serviceSpring/preguntaHistoria';
import { Historia } from '../serviceSpring/historia';
import { Service } from './../serviceSpring/service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.css']
})
export class DetalleHistorialComponent implements OnInit {

  preguntas: PreguntaHistoria[];

  constructor(private router: Router, private service: Service,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPreguntas();
  }

  cargarPreguntas(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.service.getPreguntaByHistoria(id).subscribe(preguntas => {this.preguntas = preguntas
        })
      }
    })
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

}
