import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroresRoutingModule } from './herores-routing.module'; 

import { GregarComponent } from './pages/gregar/gregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [
    GregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HeroresRoutingModule
  ]
})

export class HeroesModule { }
