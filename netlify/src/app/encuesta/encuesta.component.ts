import { Component, OnInit } from '@angular/core';
import { Paciente } from '../serviceSpring/paciente';
import { Pregunta } from '../serviceSpring/pregunta';
import { Historia } from '../serviceSpring/historia';
import { PreguntaHistoria } from '../serviceSpring/preguntaHistoria';
import { Service } from '../serviceSpring/service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public preguntasA: Pregunta[];
  public preguntasD: Pregunta[];
  public historia: Historia = new Historia();
  public paciente: Paciente;
  public historiaA: Historia;
  public historiaD: Historia;
  public preguntaHist: PreguntaHistoria = new PreguntaHistoria();

  constructor(private service: Service, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPreguntas();
  }

  cargarPreguntas(): void{
    this.service.getPaciente(localStorage.getItem('email')).subscribe(paciente => {this.paciente = paciente
      if(paciente.ansiedad){
        this.historia.area = 'Ansiedad'
        this.historia.paciente = this.paciente
        this.historia.psicologo = this.paciente.psicologo
        this.service.createHistoria(this.historia).subscribe(historia => this.historiaA = historia)
        this.service.getPreguntasByArea('Ansiedad').subscribe(preguntas => this.preguntasA = preguntas)
      }
      if(paciente.depresion){
        this.historia.area = 'Depresion'
        this.historia.paciente = this.paciente
        this.historia.psicologo = this.paciente.psicologo
        this.service.createHistoria(this.historia).subscribe(historia => this.historiaD = historia)
        this.service.getPreguntasByArea('Depresion').subscribe(preguntas => this.preguntasD = preguntas)
      }
    })
  }

  createA(pregunta: Pregunta, respuesta: string){
    this.preguntaHist.pregunta = pregunta
    this.preguntaHist.historia = this.historiaA
    this.preguntaHist.respuesta = respuesta
    this.service.createPreguntaHistoria(this.preguntaHist).subscribe(preguntahistoria => this.preguntasA = this.preguntasA.filter(cli => cli !== pregunta))
  }

  createD(pregunta: Pregunta, respuesta: string){
    this.preguntaHist.pregunta = pregunta
    this.preguntaHist.historia = this.historiaD
    this.preguntaHist.respuesta = respuesta
    this.service.createPreguntaHistoria(this.preguntaHist).subscribe(preguntahistoria => this.preguntasD = this.preguntasD.filter(cli => cli !== pregunta))
  }

  actualizarHistoria(){
    if(this.historiaA!=null){
      this.service.updateHistoria(this.historiaA).subscribe(historia=>{
        if(historia.historia.prediccion="Alto"){
          swal.fire('Terminaste', 'Te sugerimos que saques una cita con el psicologo, te esperamos de nuevo mañana.' , 'success')
        }
        this.router.navigate(['/introduccion'])})
    }
    if(this.historiaD!=null){
      this.service.updateHistoria(this.historiaD).subscribe(historia=>{
        if(historia.historia.prediccion="Alto"){
          swal.fire('Terminaste', 'Te sugerimos que saques una cita con el psicologo, te esperamos de nuevo mañana.' , 'success')
        }
        this.router.navigate(['/introduccion'])})
    }
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
