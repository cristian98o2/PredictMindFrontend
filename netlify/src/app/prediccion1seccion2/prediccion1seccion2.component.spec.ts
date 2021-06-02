import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion1seccion2Component } from './prediccion1seccion2.component';

describe('Prediccion1seccion2Component', () => {
  let component: Prediccion1seccion2Component;
  let fixture: ComponentFixture<Prediccion1seccion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion1seccion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion1seccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
