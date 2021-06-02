import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2pregunta3Component } from './seccion2pregunta3.component';

describe('Seccion2pregunta3Component', () => {
  let component: Seccion2pregunta3Component;
  let fixture: ComponentFixture<Seccion2pregunta3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion2pregunta3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2pregunta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
