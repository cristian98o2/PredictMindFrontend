import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common'
import { Psicologo } from './psicologo'
import { Paciente } from './paciente'
import { Pregunta } from './pregunta'
import { Historia } from './historia'
import { PreguntaHistoria} from './preguntaHistoria'
import { Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http'
import { map, catchError, tap } from 'rxjs/operators'
import swal from 'sweetalert2'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class Service{

  private url:string = 'https://predictminduq.herokuapp.com';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router){}

  getPsicologo(id): Observable<Psicologo>{
    return this.http.get<Psicologo>(`${this.url}/psicologo/${id}`).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        //swal.fire('Error de ingreso', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  getPsicologos(): Observable<Psicologo[]>{
    return this.http.get<Psicologo[]>(this.url+'/psicologo/psicologos');
  }

  getPaciente(id): Observable<Paciente>{
    return this.http.get<Paciente>(`${this.url}/paciente/${id}`).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        //swal.fire('Error de ingreso', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  getPacientes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url+'/paciente/pacientes');
  }

  getPacienteByID(id: number): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${this.url}/paciente/psicologo/${id}`)
  }


  createPaciente(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(this.url+'/paciente/create', paciente, {headers: this.httpHeaders})
  }

  createPregunta(pregunta: Pregunta): Observable<Pregunta>{
    return this.http.post<Pregunta>(this.url+'/pregunta/create', pregunta, {headers: this.httpHeaders})
  }

  updatePaciente(paciente: Paciente): Observable<any> {
    return this.http.put<Paciente>(`${this.url}/paciente/edit/${paciente.id}`, paciente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if(e.status==400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  updateHistoria(historia: Historia):Observable<any> {
    return this.http.put<Historia>(`${this.url}/historia/edit/${historia.id}`, historia, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        if(e.status==400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  eliminarPaciente(id: number): Observable<Paciente>{
    return this.http.delete<Paciente>(`${this.url}/paciente/delete/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  getPreguntas(): Observable<Pregunta[]>{
    return this.http.get<Pregunta[]>(this.url+'/pregunta/all')
  }

  eliminarPregunta(id:number): Observable<Pregunta>{
    return this.http.delete<Pregunta>(`${this.url}/pregunta/delete/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  getPreguntasByArea(area: string): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(`${this.url}/pregunta/area/${area}`)
  }

  createHistoria(historia: Historia): Observable<Historia>{
    return this.http.post<Historia>(this.url+'/historia/create', historia, {headers:this.httpHeaders}).pipe(
      map((response: any) => response.historia as Historia),
      catchError(e => {

        if(e.status==400){
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      }))
  }

  createPreguntaHistoria(preguntaHistoria: PreguntaHistoria): Observable<PreguntaHistoria>{
    return this.http.post<PreguntaHistoria>(this.url+'/preguntah/create', preguntaHistoria, {headers: this.httpHeaders})
  }

  verificacion(id: number): Observable<boolean>{
    return this.http.get<boolean>(`${this.url}/historia/verificacion/${id}`)
  }

  getHistoriasByPaciente(id: number, page:number): Observable<any>{
    //return this.http.get<Historia[]>(`${this.url}/historia/paciente/${id}`)
    return this.http.get(`${this.url}/historia/${id}/page/${page}`)
  }

  getHistoriasByPacientes(id: number): Observable<Historia[]>{
    return this.http.get<Historia[]>(`${this.url}/historia/paciente/${id}`)
  }

  getHistoriasByPacientesOrden(id: number): Observable<Historia[]>{
    return this.http.get<Historia[]>(`${this.url}/historia/pacienteOrden/${id}`)
  }


  deleteHistoria(id: number): Observable<Historia>{
    return this.http.delete<Historia>(`${this.url}/historia/delete/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    )
  }

  getPreguntaByHistoria(id: number): Observable<PreguntaHistoria[]>{
    return this.http.get<PreguntaHistoria[]>(`${this.url}/historia/${id}/preguntas`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      }))
  }
}
