import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";
import { HeroesComponent } from "../heroes/heroes.component";

@Component({
  providers: [HeroesComponent],
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {

  heroes:any[] = [];
  termino:string;
  constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private _comp:HeroesComponent) { 


  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }
    
  verHeroe(idx:number)
  {
    this._comp.verHeroe(idx);
  }

}
