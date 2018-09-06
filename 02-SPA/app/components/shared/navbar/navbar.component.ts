import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from "../../../services/heroes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroeBuscado: Heroe[];

  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/busqueda', termino]);
  }

}
