import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from './interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _baseUrl: string = environment.baseUrl;

  constructor( private _http: HttpClient ) { }


  login(){
    return this._http.get<Auth>(`${ this._baseUrl }/usuarios/1`);
  }

}
