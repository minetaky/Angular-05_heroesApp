import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  heroesList: Heroe[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
    .subscribe( resp => {
      this.heroesList = resp
    } );
  }

}
