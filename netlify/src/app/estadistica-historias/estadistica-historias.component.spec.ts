import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaHistoriasComponent } from './estadistica-historias.component';

describe('EstadisticaHistoriasComponent', () => {
  let component: EstadisticaHistoriasComponent;
  let fixture: ComponentFixture<EstadisticaHistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaHistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
