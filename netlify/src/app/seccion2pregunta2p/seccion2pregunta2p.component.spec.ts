import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2pregunta2pComponent } from './seccion2pregunta2p.component';

describe('Seccion1pregunta2pComponent', () => {
  let component: Seccion2pregunta2pComponent;
  let fixture: ComponentFixture<Seccion2pregunta2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion2pregunta2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2pregunta2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
