import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ServicesService } from '../services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private _authService: ServicesService,
               private _router: Router ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this._authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ){
            this._router.navigate(['./auth/login']);
          }
        } )
      );

    // if( this._authService.auth.id ){
    //     return true;
    // }

    // return false;
  }


  canLoad(  
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | boolean {

      return this._authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ){
            this._router.navigate(['./auth/login']);
          }
        } )
      );

      // if( this._authService.auth.id ){
      //   return true;
      // }

      // return false;
  }
}
