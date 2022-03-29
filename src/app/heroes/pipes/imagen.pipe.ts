import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe ): string {

    if( !heroe.id  ){
      //return 'assets/heroes/' + heroe.id + '.jpg'; //--También funciona así
      return `assets/no-image.png`;
    }else if( heroe.alt_img ){
      return heroe.alt_img;
    }
    return `assets/heroes/${heroe.id}.jpg`;

  }

}
