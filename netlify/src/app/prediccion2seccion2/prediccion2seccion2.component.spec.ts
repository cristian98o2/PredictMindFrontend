import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion2seccion2Component } from './prediccion2seccion2.component';

describe('Prediccion2seccion2Component', () => {
  let component: Prediccion2seccion2Component;
  let fixture: ComponentFixture<Prediccion2seccion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion2seccion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion2seccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
