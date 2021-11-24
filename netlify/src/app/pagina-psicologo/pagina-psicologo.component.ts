import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../serviceSpring/paciente';
import { Service } from './../serviceSpring/service';
import { ModalService } from '../estadistica-pacientes/modal.service'
import swal from 'sweetalert2'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pagina-psicologo',
  templateUrl: './pagina-psicologo.component.html',
  styleUrls: ['./pagina-psicologo.component.css']
})
export class PaginaPsicologoComponent implements OnInit {

  constructor(private router: Router, private service: Service, public modalService: ModalService) {

  }
  Totalpacientes:Paciente[];
  pacientes:Paciente[]= [];
  pacientesFijos:Paciente[]= [];

  ngOnInit() {
    this.getUsuarios()
    this.fijos()
  }



  async getUsuarios(){
   this.service.getPacienteByID(parseInt(localStorage.getItem('email'))).subscribe(pacientes => {
     this.Totalpacientes = pacientes
     for(var i=0;i<this.Totalpacientes.length;i++){
       if(this.Totalpacientes[i].psicologo.id==parseInt(localStorage.getItem('email'))){
       this.pacientes.push(this.Totalpacientes[i]);
        }
     }
   })
  }

  async fijos(){

   //await this.AdminService.getPacientes().then(respond => this.Totalpacientes=respond)
   this.service.getPacienteByID(parseInt(localStorage.getItem('email'))).subscribe(pacientes => {
     this.Totalpacientes = pacientes
     for(var i=0;i<this.Totalpacientes.length;i++){
    //   console.log(this.Totalpacientes[i].idPaciente+'\n'+this.Totalpacientes[i].nombre)
     if(this.Totalpacientes[i].psicologo.id==parseInt(localStorage.getItem('email'))){
     //this.routes.push( {
     //   title:""+this.pacientes[i].idPaciente+"-"+this.pacientes[i].nombre,
       // parametro:""+this.pacientes[i].nombre,
       // route:'/psicologo/usuario',
       // icon :'dashboard',
       //}
     // )
    // console.log(localStorage.getItem('email'))
  // console.log(this.Totalpacientes[i].nombre)
     this.pacientesFijos.push(this.Totalpacientes[i]);

     }
     }
   })
  }


  delete(paciente: Paciente): void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al paciente ${paciente.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarPaciente(paciente.id).subscribe(
          response => {
            this.pacientes = this.pacientes.filter(cli => cli !== paciente)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Paciente ${paciente.nombre} eliminado con exito`,
              'success'
            )}
        )}
    })
  }

  async buscar(form: NgForm){
    var persona

    if(form.value.identificacion==''){
      this.pacientes.splice(0);
      this.getUsuarios();
    }
    else {
      var verificación = false
      for(var i=0; i<this.pacientesFijos.length;i++){

        if(this.pacientesFijos[i].identificacion==form.value.identificacion){
          persona = this.pacientesFijos[i];
          this.pacientes.splice(0);
          i=this.pacientesFijos.length;
          verificación=true
        }
      }
      if(verificación){
        this.pacientes.push(persona)
      }
    }
  }

  abrirEstadistica(){
    this.modalService.abrirModal();
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
