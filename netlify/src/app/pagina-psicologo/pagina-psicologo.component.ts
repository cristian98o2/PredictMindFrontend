import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../service/Paciente';
import { AdminService } from '../service/AdminService'

@Component({
  selector: 'app-pagina-psicologo',
  templateUrl: './pagina-psicologo.component.html',
  styleUrls: ['./pagina-psicologo.component.css']
})
export class PaginaPsicologoComponent implements OnInit {

  constructor(private router: Router, private AdminService: AdminService) {

  }

  ngOnInit() {
    this.getUsuarios()
  }
   Totalpacientes:Paciente[];
   pacientes:Paciente[]= [];

  async getUsuarios(){

   await this.AdminService.getPacientes().then(respond => this.Totalpacientes=respond)

   for(var i=0;i<this.Totalpacientes.length;i++){
  //   console.log(this.Totalpacientes[i].idPaciente+'\n'+this.Totalpacientes[i].nombre)
   if(this.Totalpacientes[i].idPsicologo==parseInt(localStorage.getItem('email'))){
   //this.routes.push( {
   //   title:""+this.pacientes[i].idPaciente+"-"+this.pacientes[i].nombre,
     // parametro:""+this.pacientes[i].nombre,
     // route:'/psicologo/usuario',
     // icon :'dashboard',
     //}
   // )
  // console.log(localStorage.getItem('email'))
console.log(this.Totalpacientes[i].nombre)

   this.pacientes.push(this.Totalpacientes[i])

   }
   }

  }
}
