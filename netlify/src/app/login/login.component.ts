import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Service } from './../serviceSpring/service';
import { Paciente } from '../serviceSpring/paciente';
import { Psicologo } from '../serviceSpring/psicologo';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public psicologo: Psicologo = new Psicologo();

  constructor(private router: Router,  private service: Service) {}

  ngOnInit() {
  }


  pacientes : Paciente[];
  psicologos : Psicologo[];
  inicio=true

  async login(form: NgForm){
    var con=0
    //await this.AdminService.getPacientes().then(pacientes => this.pacientes=pacientes)
    this.service.getPacientes().subscribe(pacientes => {

      this.pacientes = pacientes

      for(var i=0; i<this.pacientes.length;i++){
        if(form.value.password==this.pacientes[i].identificacion && form.value.identificacion===this.pacientes[i].email){
          localStorage.setItem('email',''+this.pacientes[i].id)
          con=1
          this.router.navigate(['/introduccion']);

        }
      }
    })

        this.service.getPsicologos().subscribe(psicologos => {
          //console.log(psicologos[0]);
          this.psicologos = psicologos
          //console.log(this.psicologos[0])
          for(var j=0; j<this.psicologos.length;j++){
           if(form.value.password==this.psicologos[j].identificacion && form.value.identificacion===this.psicologos[j].email){
             localStorage.setItem('email',''+this.psicologos[j].id)
             con=1
             this.router.navigate(['/paginaPsicologo']);


           }
         }})

        // await this.AdminService.getPsicologos().then(psicologos => this.psicologos=psicologos)



    if(con==0){
      this.inicio=false
    }
  }

  inicioMetodo():Boolean{

    return !this.inicio
  }




}
