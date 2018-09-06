import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  id: number;

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

      this._activatedRoute.params.subscribe(params => {
        console.log(params);
        this.heroe = this._heroesService.getHeroe(params['id']);
        console.log(this.heroe);
      });
   }

  ngOnInit() {
  }

}
