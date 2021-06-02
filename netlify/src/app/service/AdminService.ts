import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Pregunta } from './Pregunta';
import { Paciente } from './Paciente';
import { Observable } from 'rxjs';
import { Pregunta_Paciente } from './Pregunta_Paciente';
import { Historia } from './Historia';
import { Contador } from './Contador'
import { Psicologo } from './Psicologo';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
})
export class AdminService{

    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http, private router:Router){}

private isNoAutorizado(e): boolean{
  if(e.status==401 || e.status==403){
    this.router.navigate(['/login'])
    return true
  }
  return false
}

    getPreguntas(i:number): Promise<Pregunta> {
        var resultado = this.http.get('http://proyectopredictmind.herokuapp.com/pregunta/'+i+'?format=json', {headers: this.headers}).toPromise()
        .then(response=> response.json() as Pregunta)
        return resultado
    }

    getPaciente(i:number): Promise<Paciente> {
        var resultado = this.http.get('http://proyectopredictmind.herokuapp.com/paciente/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Paciente)

        return resultado
    }

    async getPacientes(): Promise<Paciente[]>{
        const response = await this.http.get('http://proyectopredictmind.herokuapp.com/paciente?format=json', { headers: this.headers })
        .toPromise();
      return response.json() as Paciente[];
    }

    async getPsicologos(): Promise<Psicologo[]>{
        const response = await this.http.get('http://proyectopredictmind.herokuapp.com/psicologo?format=json', { headers: this.headers })
        .toPromise();
      return response.json() as Psicologo[];
    }

    getPsicologo(i:number): Promise<Psicologo> {
        var resultado = this.http.get('http://proyectopredictmind.herokuapp.com/psicologo/'+i+'?format=json', {headers: this.headers})
        .toPromise()
        .then(response=> response.json() as Psicologo)

        return resultado
    }

    async getPreguntas_Paciente(): Promise<Pregunta_Paciente[]>{
        const response = await this.http.get('http://proyectopredictmind.herokuapp.com/pregunta_paciente?format=json', { headers: this.headers })
        .toPromise();
      return response.json() as Pregunta_Paciente[];
    }

    async getHistorias(): Promise<Historia[]>{
        const response = await this.http.get('http://proyectopredictmind.herokuapp.com/historia?format=json', { headers: this.headers })
        .toPromise();
      return response.json() as Historia[];
    }

    async getHistoria(i:number): Promise<Historia>{
        const response = await this.http.get('http://proyectopredictmind.herokuapp.com/historia/' + i + '?format=json', { headers: this.headers })
        .toPromise();
      return response.json() as Historia;
    }


    async createPregunta_Paciente(p: Pregunta_Paciente): Promise<Pregunta_Paciente>{
        const response = await this.http
        .post("http://proyectopredictmind.herokuapp.com/pregunta_paciente", JSON.stringify(p), { headers: this.headers })
        .toPromise();
      return response.json() as Pregunta_Paciente;

    }

    async createHistoria(h: Historia): Promise<Historia>{
        const response = await this.http
        .post("http://proyectopredictmind.herokuapp.com/historia", JSON.stringify(h), { headers: this.headers })
        .toPromise();
      return response.json() as Historia;

    }

    getContador():Promise<Contador>{
        var resultado=this.http.get('http://proyectopredictmind.herokuapp.com/contador/1?format=json', {headers:this.headers})
        .toPromise()
        .then(response=>response.json() as Contador)

        return resultado
    }

    updateContador(contador:Contador):Promise<Contador>{
        var resultado=this.http.put('http://proyectopredictmind.herokuapp.com/contador/1?format=json', contador, {headers:this.headers})
        .toPromise()
        .then(response => response.json() as Contador)

        return resultado
    }

    async getPreguntasTotal(): Promise<Pregunta[]>{
        const response = await this.http.get('http://proyectopredictmind.herokuapp.com/pregunta?format=json', { headers: this.headers }).toPromise();
      return response.json() as Pregunta[];
    }
}
