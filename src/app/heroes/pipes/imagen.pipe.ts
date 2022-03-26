import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe ): string {

    if( heroe != undefined && heroe.id != undefined ){
      //return 'assets/heroes/' + heroe.id + '.jpg'; //--También funciona así
      return `assets/heroes/${ heroe.id }.jpg`;
    }else{
      return 'assets/no-image.png';
    }

  }

}
