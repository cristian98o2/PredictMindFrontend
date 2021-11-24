import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaPacientesComponent } from './estadistica-pacientes.component';

describe('EstadisticaPacientesComponent', () => {
  let component: EstadisticaPacientesComponent;
  let fixture: ComponentFixture<EstadisticaPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
