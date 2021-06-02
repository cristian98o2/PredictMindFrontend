import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2pregunta1Component } from './seccion2pregunta1.component';

describe('Seccion2pregunta1Component', () => {
  let component: Seccion2pregunta1Component;
  let fixture: ComponentFixture<Seccion2pregunta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion2pregunta1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2pregunta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
