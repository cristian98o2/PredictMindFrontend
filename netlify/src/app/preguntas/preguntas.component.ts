import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../service/AdminService';
import { Pregunta } from '../service/Pregunta';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Lote } from '../usuarios/lote';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {



respuestas:number[]=[];
tamanio:number;
form:FormGroup;
preguntas: Pregunta[] = [];
dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    lista:Lote[]=[];
  lote:Lote= new Lote();
  lote1:Lote= new Lote();
  lote2:Lote= new Lote();
  lote3:Lote= new Lote();
  lote4:Lote= new Lote();
  lote5:Lote= new Lote();

  constructor(private router: Router, private AdminService : AdminService, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
this.lote.id=3;
this.lote.etiqueta="as";

this.lote2.id=4;
this.lote2.etiqueta="w";

this.lote3.id=334;
this.lote3.etiqueta="d";

this.lote4.id=34;
this.lote4.etiqueta="a";

this.lote5.id=35;
this.lote5.etiqueta="ys";

    this.lista.push(this.lote);
    this.lista.push(this.lote2);
    this.lista.push(this.lote3);
    this.lista.push(this.lote4);
    this.lista.push(this.lote5);
    console.log(this.lista)
    this.lista.forEach(lote=>{
        this.dropdownList.push({"id":lote.id,"itemName":lote.etiqueta})
        }
    );

        this.dropdownSettings = {
                                  singleSelection: false,
                                  text:"Select Countries",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };
    this.crear()
    this.getPreguntasTotal()




  }
  onItemSelect(item:any){
          console.log(item);
          console.log(this.selectedItems);
      }
      OnItemDeSelect(item:any){
          console.log(item);
          console.log(this.selectedItems);
      }
      onSelectAll(items: any){
          console.log(items);
      }
      onDeSelectAll(items: any){
          console.log(items);
      }
  getPreguntasTodas():FormArray{

    this.AdminService.getPreguntasTotal().then(response=>{
      let tamanio=(response as Pregunta[]).length;
    for (let i = 0; i <this.tamanio; i++) {

    this.valor.push(new FormControl);
    }
    return this.valor;
    })
    return null

  }


  getPreguntasTotal():void{

     this.AdminService.getPreguntasTotal().then(response=>{
       this.preguntas=response as Pregunta[];
     })

  }

crear(){

      this.form=this.formBuilder.group({
    //  valor: new FormArray([new FormControl(null)])
      valor:this.getPreguntasTodas(),

      });
      this.respuestas.push(this.valor.value)
}

  submit(){
  console.log(this.valor.value);
  for (let i = 0; i <this.respuestas.length; i++) {
  console.log(this.respuestas[i])
  }
  }



  get valor():FormArray{
    return this.form.get("valor") as FormArray;
  }



  logout(){
    localStorage.removeItem('email');
    this.reiniciar();
    this.router.navigate(['']);
  }


  reiniciar():void{
    for(var i=2;i<=2;i++){
      localStorage.removeItem('respuesta'+i);
    }
  }

}
