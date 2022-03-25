import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { GregarComponent } from './pages/gregar/gregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

const rutas: Routes = [
{
  path: '',
  component: HomeComponent,
  children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'agregar', component: GregarComponent },
    { path: 'editar/:id', component: GregarComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: ':id', component: HeroeComponent },
    { path: '**', redirectTo: 'listado' }
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroresRoutingModule { }
