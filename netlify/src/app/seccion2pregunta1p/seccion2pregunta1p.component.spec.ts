import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2pregunta1pComponent } from './seccion2pregunta1p.component';

describe('Seccion2pregunta1pComponent', () => {
  let component: Seccion2pregunta1pComponent;
  let fixture: ComponentFixture<Seccion2pregunta1pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion2pregunta1pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2pregunta1pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
