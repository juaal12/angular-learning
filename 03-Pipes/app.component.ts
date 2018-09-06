import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Juanjo";
  nombre2:string = "juAnjo Albiach";

  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  numero:number = 2.34;
  salario:number = 1234.5;
  heroe = {nombre:"Lobezno",  
          edad:500,
          direccion:{
            calle:"Prueba",
            puerta: 65
          }};
  valorDePromesa = new Promise((resolve,reject) => {
    setTimeout( ()=>resolve('Llego el dato'),3000);
  })

  fecha = new Date();

  video = "-RzYNn9_KpY"

  varBool:boolean = true;
}
