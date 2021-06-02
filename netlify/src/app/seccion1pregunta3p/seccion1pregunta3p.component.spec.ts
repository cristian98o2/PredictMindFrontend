import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta3pComponent } from './seccion1pregunta3p.component';

describe('Seccion1pregunta3pComponent', () => {
  let component: Seccion1pregunta3pComponent;
  let fixture: ComponentFixture<Seccion1pregunta3pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta3pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta3pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
