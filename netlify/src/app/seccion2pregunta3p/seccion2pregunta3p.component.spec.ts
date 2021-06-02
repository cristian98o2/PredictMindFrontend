import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2pregunta3pComponent } from './seccion2pregunta3p.component';

describe('Seccion2pregunta3pComponent', () => {
  let component: Seccion2pregunta3pComponent;
  let fixture: ComponentFixture<Seccion2pregunta3pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seccion2pregunta3pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2pregunta3pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
