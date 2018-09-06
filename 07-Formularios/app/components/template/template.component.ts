import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Object =
  {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "",
    acepta: ""
  };

  paises:Object[] = 
  [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ES",
    nombre: "España"
  }];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm)
  {
    console.log("Formulario Posteado");
    console.log(forma);
    console.log("Valor Forma", forma.value);

    console.log("Usuario", this.usuario);
  }

}
