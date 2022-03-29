import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor( private _router: Router,
               private _authService: ServicesService  ) { }

  login(){
    //Ir al backend que responde un usuario

    this._authService.login()
    .subscribe( ( resp ) => {
      console.log(resp);
      if(resp.id){
        this._router.navigate(['./heroes']);
      }
    })

  }

}
