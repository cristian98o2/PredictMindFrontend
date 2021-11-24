import { Component, OnInit } from '@angular/core';
import { Paciente } from '../serviceSpring/paciente'
import { Psicologo } from '../serviceSpring/psicologo'
import { Service } from '../serviceSpring/service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  public paciente : Paciente = new Paciente;
  public errores: string[];

  constructor(private service: Service, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPaciente();
  }

  cargarPaciente():void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.service.getPaciente(id).subscribe(paciente => this.paciente = paciente
    )}
  })
}

  public create():void{
    this.service.getPsicologo(parseInt(localStorage.getItem('email'))).subscribe(psicologo => {
      this.paciente.psicologo = psicologo
      this.service.createPaciente(this.paciente).subscribe(
        paciente => {this.router.navigate(['/paginaPsicologo'])
        swal.fire('Nuevo paciente', 'El cliente '+this.paciente.nombre+' ha sido creado con exito!' , 'success')
      },
      err => {
        this.errores = err.error.errors as string [];
        console.error(err.error.errors);
      }

      )
    })
  }

  public update(): void{
    this.paciente.edad=this.calcularEdad(this.paciente.fechaNacimiento)
    this.service.updatePaciente(this.paciente).subscribe(
      json => {
        this.router.navigate(['/paginaPsicologo'])
        swal.fire('Paciente Actualizado', `${json.mensaje}: ${json.paciente.nombre}`, 'success')
      },
      err => {
        this.errores = err.error.errors as string [];
        console.error(err.error.errors);
      }
    )
  }

  public calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
