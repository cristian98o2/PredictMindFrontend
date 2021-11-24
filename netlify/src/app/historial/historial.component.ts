import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Historia } from '../serviceSpring/historia';
import { Paciente } from '../serviceSpring/paciente';
import { Service } from './../serviceSpring/service';
import { tap } from 'rxjs/operators'
import { ModalsService } from '../estadistica-historias/modals.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historias: Historia[];
  paginador: any;
  id: number;
  paciente:Paciente;

  constructor(private router: Router, private service: Service,
  private activatedRoute: ActivatedRoute, public modalsService: ModalsService) { }

  ngOnInit() {
    this.cargarHistorias();
    this.cargarPaciente();
  }

  cargarPaciente(){
    this.service.getPaciente(this.id).subscribe(paciente =>{
      this.paciente=paciente
    })
  }

  cargarHistorias(): void {
    //this.activatedRoute.params.subscribe(params => {
      //let id = params['id']
      //if(id){
        //this.service.getHistoriasByPaciente(id).subscribe(historias => {this.historias = historias
        //})
      //}
    //})
    this.activatedRoute.params.subscribe(param => {
      this.id=param['id'];
      this.activatedRoute.paramMap.subscribe(params => {
        let page: number = +params.get('page');
        if(this.id){
          if(!page){
            page = 0
          }
          this.service.getHistoriasByPaciente(this.id, page).pipe(
            tap(response =>{
              this.historias = response.content as Historia[]
            })
          )
          .subscribe(response =>{
            this.paginador = response;
          })
        }
      })
    })
  }

  delete(historia: Historia): void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar la historia del paciente ${historia.paciente.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteHistoria(historia.id).subscribe(
          response => {
            this.historias = this.historias.filter(cli => cli !== historia)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Historia de ${historia.paciente.nombre} eliminada con exito`,
              'success'
            )}
        )}
    })
  }

  abrirEstadistica(){
    this.modalsService.abrirModal();
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
