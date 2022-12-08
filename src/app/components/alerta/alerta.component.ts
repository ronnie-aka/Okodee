import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {


  @Input()
  set cerrar(value: boolean) {
    if (value) { this.openSnackBar() }
    else { this.dismiss() }
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }


  openSnackBar() {
    this._snackBar.open('No se han encontrado películas con el título que se ha insertado', 'salir', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  dismiss(): void {
    this._snackBar.dismiss();
  }

}
