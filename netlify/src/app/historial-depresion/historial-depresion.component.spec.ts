import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDepresionComponent } from './historial-depresion.component';

describe('HistorialDepresionComponent', () => {
  let component: HistorialDepresionComponent;
  let fixture: ComponentFixture<HistorialDepresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialDepresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDepresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
