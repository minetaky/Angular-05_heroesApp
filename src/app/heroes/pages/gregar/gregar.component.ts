import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from '../../component/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-gregar',
  templateUrl: './gregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
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

  constructor(private _heroesService: HeroesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _snackbar: MatSnackBar,
              private _matDialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this._router.url.includes('editar') ){
      return;
    }



    this._activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this._heroesService.getHeroesById( id )  )
    )
    .subscribe( ( heroe )  => this.heroe = heroe);
  }




guardar(){
  if(this.heroe.superhero.trim().length === 0){
    return;
  }

  if(this.heroe.id){
    this._heroesService.actualizarHeroe( this.heroe )
      .subscribe( (heroe) => this.mostrarSnackbar('Registro Actualizado') )
  }else{
    this._heroesService.agregarHeroe( this.heroe )
    .subscribe( heroe  => { 
        this._router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackbar('Registro Creado');
    } )
  }
}


borrarHeroe(){


  const dialog = this._matDialog.open( ConfirmarComponent, {
    width: '250px',
    data: { ...this.heroe }
  });

  dialog.afterClosed().subscribe(
    ( resultado ) => {

      if( resultado ){
        this._heroesService.borrarHeroe( this.heroe.id! )
        .subscribe( resp => {
          this._router.navigate(['/heroes']);
          this.mostrarSnackbar('Registro Borrado') 
        }  );

      }
      
    }
  )
  

}


mostrarSnackbar(mensaje: string): void{
  this._snackbar.open( mensaje, 'cerrar', {
    duration: 2500
  });
}


}
