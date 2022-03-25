import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroresRoutingModule } from './herores-routing.module'; 
import { MaterialModule } from '../material/material.module';


import { GregarComponent } from './pages/gregar/gregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeTarjetaComponent } from './component/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    GregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroresRoutingModule,
    MaterialModule
  ]
})

export class HeroesModule { }
