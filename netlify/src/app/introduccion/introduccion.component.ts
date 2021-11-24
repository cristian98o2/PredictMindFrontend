import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../serviceSpring/service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {

  public verificacion: boolean;

  constructor(private service: Service, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  verificar(): void{
    this.service.verificacion(parseInt(localStorage.getItem('email'))).subscribe(verificacion => {
      this.verificacion = verificacion
      if(this.verificacion){
        this.router.navigate(['/encuesta'])
      }
      else {
       swal.fire('Ya estuviste hoy', 'Para realizar una nueva encuesta vuelve mañana' , 'success')
      }

    })
  }

  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }

}
