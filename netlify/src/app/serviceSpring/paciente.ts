import { Psicologo } from './psicologo'

export class Paciente {

  id: number
  identificacion: number
  nombre: string
  email: string
  fechaNacimiento: string
  fechaIngreso: string
  direccion: string
  numero: number
  descripcion: string
  ansiedad: boolean
  depresion: boolean
  programa: string
  facultad: string
  semestre: number
  edad: number
  ciudad: string
  diagnostico: boolean
  prioridad: boolean
  psicologo: Psicologo

}
