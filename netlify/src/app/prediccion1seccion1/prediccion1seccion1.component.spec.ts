import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion1seccion1Component } from './prediccion1seccion1.component';

describe('Prediccionseccion1Component', () => {
  let component: Prediccion1seccion1Component;
  let fixture: ComponentFixture<Prediccion1seccion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion1seccion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion1seccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
