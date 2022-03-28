import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  constructor(private _heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this._heroeService.getSugerencias( this.termino )
    .subscribe( heroes => {
      console.log(heroes.length);
      if(heroes.length == 0){
        this.heroes = [{
          id:               'na',
          superhero:        'No se encontro información con su termino de búsqueda.',
          publisher:      Publisher.DCComics,
          alter_ego:        '',
          first_appearance: '',
          characters:       '',
          alt_img:         '' // https://algo.com/img.png
      }]
      }else{
        this.heroes = heroes 
      }
      
    
    });
  }

  opcionSeleccionada( evento: MatAutocompleteSelectedEvent ){
    const heroe: Heroe = evento.option.value;

    if(heroe.id != 'na'){
      this._heroeService.getHeroesById( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe );
    }else{
      this.heroeSeleccionado = undefined;
    }
    
    

  }

}
