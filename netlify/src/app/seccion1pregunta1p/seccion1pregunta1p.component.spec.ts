import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta1pComponent } from './seccion1pregunta1p.component';

describe('Seccion1pregunta1pComponent', () => {
  let component: Seccion1pregunta1pComponent;
  let fixture: ComponentFixture<Seccion1pregunta1pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta1pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta1pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
