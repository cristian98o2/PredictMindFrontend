import { Component, OnInit, Input } from '@angular/core';
import { DiagramaLineal } from './diagramalineal';
import { Series } from './series'
import { Historia } from '../serviceSpring/historia';
import { Paciente } from '../serviceSpring/paciente';
import { Service } from './../serviceSpring/service';
import { ModalsService } from './modals.service'

@Component({
  selector: 'app-estadistica-historias',
  templateUrl: './estadistica-historias.component.html',
  styleUrls: ['./estadistica-historias.component.css']
})
export class EstadisticaHistoriasComponent implements OnInit {

  @Input() paciente: Paciente;

  id: number
  nombre: string

  data:DiagramaLineal[]

  view: [number, number] = [600, 400];

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  yScaleMin: number = 1;
  xAxisLabel: string = 'Dias';
  yAxisLabel: string = 'Prediccion';
  timeline: boolean = true;
  legendPosition: string = 'below';
  legendTitle: string = "Referencias eje Y";

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private service: Service, public modalsService: ModalsService) {
    var data=this.data
  Object.assign(this, { data });
}

  ngOnInit() {
    this.id=this.paciente.id
    const lista:DiagramaLineal[] = this.getHistorias()

    setTimeout(() =>{
      this.data =lista
    },1000)

  }

  getHistorias():DiagramaLineal[]{
    var lista: DiagramaLineal[]=[]
    var serie: Series[]=[]

    this.service.getHistoriasByPacientesOrden(this.id).subscribe(historias =>{

      var numero

      for(var i=0; i<historias.length;i++){

        var objeto:Series= new Series()
        objeto.name=historias[i].fecha
        if(historias[i].prediccion=="Bajo"){
          numero=1
        } else if(historias[i].prediccion=="Medio"){
          numero=2
        } else if(historias[i].prediccion=="Moderado"){
          numero=3
        } else if(historias[i].prediccion=="Alto"){
          numero=4
        }

        objeto.value=numero
        serie.push(objeto)

      }
      var object: DiagramaLineal= new DiagramaLineal()
      object.name=' 1. Bajo \n 2. Medio \n 3. Moderado \n 4. Alto'
      object.series=serie
      lista.push(object)
    })
    return lista
  }

  cerrarModal(){
    this.modalsService.cerrarModal()
  }

}
