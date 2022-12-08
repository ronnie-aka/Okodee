import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPelisComponent } from './lista-pelis.component';

describe('ListaPelisComponent', () => {
  let component: ListaPelisComponent;
  let fixture: ComponentFixture<ListaPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPelisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
