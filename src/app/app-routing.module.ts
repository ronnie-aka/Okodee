import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPeliculaComponent } from './components/detalles-pelicula/detalles-pelicula.component';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';


const routes: Routes = [
  {
    path:'peliculas/:array',
    component: ListaPelisComponent
  },
  {
    path:'post/:id',
    component: DetallesPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
