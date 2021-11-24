import { Psicologo } from './psicologo'
import { Paciente } from './paciente'

export class Historia {

  id: number
  descripcion: string
  fecha: string
  prediccion: string
  area: string
  psicologo: Psicologo
  paciente: Paciente
}
