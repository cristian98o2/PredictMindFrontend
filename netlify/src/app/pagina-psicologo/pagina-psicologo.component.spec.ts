import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPsicologoComponent } from './pagina-psicologo.component';

describe('PaginaPsicologoComponent', () => {
  let component: PaginaPsicologoComponent;
  let fixture: ComponentFixture<PaginaPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
