import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prediccion1seccion2pComponent } from './prediccion1seccion2p.component';

describe('Prediccion1seccion2pComponent', () => {
  let component: Prediccion1seccion2pComponent;
  let fixture: ComponentFixture<Prediccion1seccion2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prediccion1seccion2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prediccion1seccion2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
