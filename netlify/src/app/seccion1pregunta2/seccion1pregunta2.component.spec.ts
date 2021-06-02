import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta2Component } from './seccion1pregunta2.component';

describe('Seccion1pregunta2Component', () => {
  let component: Seccion1pregunta2Component;
  let fixture: ComponentFixture<Seccion1pregunta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
