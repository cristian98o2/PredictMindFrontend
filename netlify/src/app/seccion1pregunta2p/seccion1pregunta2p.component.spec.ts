import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1pregunta2pComponent } from './seccion1pregunta2p.component';

describe('Seccion1pregunta2pComponent', () => {
  let component: Seccion1pregunta2pComponent;
  let fixture: ComponentFixture<Seccion1pregunta2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion1pregunta2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1pregunta2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
