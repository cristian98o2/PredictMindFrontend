import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paginador-nav',
  templateUrl: './paginador.component.html'
})
export class PaginadorComponent implements OnInit, OnChanges {

  @Input() paginador: any;

  paginas: number[];

  desde: number;
  hasta: number;

  id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges){
    let paginadorA= changes['paginador'];

    if(paginadorA.previousValue){
      this.initPaginator();
    }
  }

  private initPaginator():void{
    this.activatedRoute.params.subscribe(param => {
      this.id=param['id'];
    this.desde= Math.min(Math.max(1,this.paginador.number-2), this.paginador.totalPages-5);
    this.hasta= Math.max(Math.min(this.paginador.totalPages, this.paginador.number+4),6);

    if(this.paginador.totalPages>5){
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);
    }else{
      this.paginas = new Array(this.paginador.totalPages).fill(0).map((_valor, indice) => indice+1);
    }
    })
  }
}
