
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output('search') searchEmitter = new EventEmitter<any>()

  search = new FormControl('');


  constructor() { }

  ngOnInit() {
    this.createListener();
  }


  createListener() {
    this.search.valueChanges.pipe(
      debounceTime(600)
    )
      .subscribe(value => this.searchEmitter.emit(value))
  }


}
