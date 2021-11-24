import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagramaBarras } from './diagramabarras';
import { ModalService } from './modal.service'
import { Paciente } from '../serviceSpring/paciente';
import { Historia } from '../serviceSpring/historia';
import { Service } from './../serviceSpring/service';

@Component({
  selector: 'app-estadistica-pacientes',
  templateUrl: './estadistica-pacientes.component.html',
  styleUrls: ['./estadistica-pacientes.component.css']
})
export class EstadisticaPacientesComponent implements OnInit {

  constructor(private router: Router, private service: Service, public modalService: ModalService) { }

  ngOnInit() {
  const lista:DiagramaBarras[] =  this.getUsuarios()

     setTimeout(() =>{
       this.data =lista
     },100)

  }

  Totalpacientes:Paciente[];
  historias: Historia[];
  nombre: string

  data: DiagramaBarras[] = [];

  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    trimLabels: boolean = false;
    legendTitle: string = 'Cantidad de pacientes con prioridad en la última encuesta';
    legendPosition: string = 'below';

    colorScheme = {
      domain: ['#FF0000', '#001EFF']
    };

  getUsuarios():DiagramaBarras[]{
    var alto=0;
    var noAlto=0;
    var lista : DiagramaBarras[] = []
   this.service.getPacienteByID(parseInt(localStorage.getItem('email'))).subscribe(pacientes => {
     this.Totalpacientes = pacientes
     if(pacientes){
       this.nombre=pacientes[0].psicologo.nombre
     }
     for(var i=0;i<this.Totalpacientes.length;i++){

       if(this.Totalpacientes[i].psicologo.id==parseInt(localStorage.getItem('email'))){
         if(this.Totalpacientes[i].prioridad){
           alto=alto+1
         }
         else{
           noAlto=noAlto+1;
         }
        }
     }
     var objeto1:DiagramaBarras=new DiagramaBarras();
     objeto1.name="Prioritarios";
     objeto1.value=alto;
     lista.push(objeto1)
     var objeto2:DiagramaBarras=new DiagramaBarras();
     objeto2.name="No Prioritarios";
     objeto2.value=noAlto;
     lista.push(objeto2)


   })
   return lista
  }

cerrarModal(){
  this.modalService.cerrarModal()
}

}
