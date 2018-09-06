import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    
    frase: any ={
        mensaje: 'Mensaje Prueba',
        autor: 'JJ Albiach'
    }

    mostrar = true;

    personajes: string [] = ['Hola', 'Adios', 'Prueba'];
}