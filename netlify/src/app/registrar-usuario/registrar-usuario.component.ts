import { Component, OnInit } from '@angular/core';
import { Paciente } from '../service/Paciente';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
titulo:string="Crear cliente";
clientes:Paciente= new Paciente();
  constructor() { }

  ngOnInit() {
  }
public create():void{}
public update():void{}
}
