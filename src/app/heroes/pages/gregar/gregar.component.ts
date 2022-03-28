import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-gregar',
  templateUrl: './gregar.component.html',
  styles: [
  ]
})
export class GregarComponent implements OnInit {

  publisher = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',

  }

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
  }

guardar(){
  if(this.heroe.superhero.trim().length === 0){
    return;
  }

  this._heroesService.agregarHeroe( this.heroe )
      .subscribe( resp  => { 
        console.log( 'Respuesta: ', resp );
      } )
}

}
