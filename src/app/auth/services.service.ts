import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from './interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _auth: Auth | undefined;
  private _baseUrl: string = environment.baseUrl;

  get auth(): Auth{
    return {...this._auth!};
  }

  constructor( private _http: HttpClient ) { }

  verificaAutenticacion(): Observable<boolean>{
    if( !localStorage.getItem('token')  ){
      return of(false);
    }
    
    return this._http.get<Auth>(`${ this._baseUrl }/usuarios/1`)
    .pipe(
      map( auth => {
        this._auth = auth;
        return true;
      }  )
    );

  }


  login(){
    return this._http.get<Auth>(`${ this._baseUrl }/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth ), //Tap es usado para efectos secundarios, ahorita llenamos el atributo antes de que llegue a los suscriptores
      tap( auth => localStorage.setItem('token', auth.id) )
    );
  }

}
