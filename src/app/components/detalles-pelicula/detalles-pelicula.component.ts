import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from 'src/app/api/peliculas.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {
  public pelicula: any;

  @Input() peliculaId: any;

  constructor(
    private buscador_peliculas: PeliculasService
    ) { }

  ngOnInit(): void {
    this.detallesPelicula();
    console.log(this.pelicula);
  }

  detallesPelicula() {
    this.buscador_peliculas.getPelicula(this.peliculaId).subscribe(
      peliculaEncontrada => this.pelicula = peliculaEncontrada
    );
      
  }


}
