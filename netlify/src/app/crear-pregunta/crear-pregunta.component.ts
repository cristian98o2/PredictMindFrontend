import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../serviceSpring/pregunta'
import { Service } from '../serviceSpring/service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {

  public pregunta: Pregunta = new Pregunta;
  public preguntas: Pregunta[];
  public errores: string[];

  constructor(private service: Service, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPreguntas()
  }

  public cargarPreguntas(): void {
    this.service.getPreguntas().subscribe(preguntas => this.preguntas = preguntas)
  }

  public create(): void{
    this.pregunta.prediccion=false
    this.pregunta.prioridad=false
    this.service.createPregunta(this.pregunta).subscribe(
      pregunta =>{
      swal.fire('Nueva pregunta', 'La pregunta ha sido creada con exito', 'success')
      this.cargarPreguntas()
    },
    err => {
      this.errores = err.error.errors as string [];

      console.error(err.error.errors);
    }
    )
  }

  public delete(pregunta: Pregunta): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${pregunta.pregunta}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarPregunta(pregunta.id).subscribe(
          response => {
            this.preguntas = this.preguntas.filter(cli => cli !== pregunta)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Pregunta ${pregunta.pregunta} eliminado con exito`,
              'success'
            )}
        )}
    })
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
