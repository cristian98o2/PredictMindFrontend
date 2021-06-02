import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta1Component } from './seccion1pregunta1.component';

describe('Seccion1pregunta1Component', () => {
  let component: Seccion1pregunta1Component;
  let fixture: ComponentFixture<Seccion1pregunta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
