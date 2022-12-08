import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './home/app.component'; 
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallesPeliculaComponent } from './components/detalles-pelicula/detalles-pelicula.component';
import { ListaPelisComponent } from './components/lista-pelis/lista-pelis.component';

//Angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatCard, MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    BuscadorComponent,
    DetallesPeliculaComponent,
    ListaPelisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    RouterModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
