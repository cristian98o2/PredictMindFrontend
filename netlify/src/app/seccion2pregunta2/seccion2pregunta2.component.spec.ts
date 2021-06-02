import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2pregunta2Component } from './seccion2pregunta2.component';

describe('Seccion2pregunta2Component', () => {
  let component: Seccion2pregunta2Component;
  let fixture: ComponentFixture<Seccion2pregunta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion2pregunta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2pregunta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
