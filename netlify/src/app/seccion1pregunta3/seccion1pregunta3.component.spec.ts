import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta3Component } from './seccion1pregunta3.component';

describe('Seccion1pregunta3Component', () => {
  let component: Seccion1pregunta3Component;
  let fixture: ComponentFixture<Seccion1pregunta3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
