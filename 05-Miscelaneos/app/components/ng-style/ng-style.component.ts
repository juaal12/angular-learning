import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanyo">
    Hola Mundo... esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamanyo = tamanyo + 10">
    <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanyo = tamanyo - 10">
    <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanyo:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
