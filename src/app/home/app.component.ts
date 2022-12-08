import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  peliculas: any = [];

  error: boolean = false;

  constructor(private buscador_peliculas: PeliculasService) { }

  ngOnInit() {

  }

  buscarPelis(value: any) {
    if (value == "") { 
      this.error = false; 
      this.peliculas = [];
    }
    else {
      this.error = false;
      this.buscador_peliculas.getPeliculas(value).subscribe(
        pelis => {
          if (pelis.Response == 'True') { this.peliculas = pelis.Search; this.error = false;}
          else {
            this.error = true;
          }
        });
    }
  }


}

