import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion1seccion1pComponent } from './prediccion1seccion1p.component';

describe('Prediccion1seccion1pComponent', () => {
  let component: Prediccion1seccion1pComponent;
  let fixture: ComponentFixture<Prediccion1seccion1pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion1seccion1pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion1seccion1pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
