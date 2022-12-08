import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private apiKey : string = '6071a5ef';
  private url: string = 'http://www.omdbapi.com/'


  getPeliculas(name : string): Observable<any>{
    const peliculas = this.http.get(`${this.url}?apikey=${this.apiKey}&s=${name}&type=movie`);
    return peliculas;
  }

  getPelicula(id : string){
    const pelicula = this.http.get(`${this.url}?apikey=${this.apiKey}&i=${id}`);
    return pelicula;
  }
}
