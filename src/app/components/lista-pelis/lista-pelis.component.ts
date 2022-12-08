import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: ['./lista-pelis.component.css']
})
export class ListaPelisComponent implements OnInit {

  peliculas: any = [];
  pelicula: any;

  @Input()
  set listaPelis(value: any[]) {
    this.peliculas = value;
  }

  @Input() componenteDetalles : boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.componenteDetalles;
  }

  mostrarDetalles(pelicula : any){
    this.componenteDetalles = true;
    this.pelicula = pelicula;
  }

}