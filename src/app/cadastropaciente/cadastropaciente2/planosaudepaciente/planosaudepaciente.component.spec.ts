import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosaudepacienteComponent } from './planosaudepaciente.component';

describe('PlanosaudepacienteComponent', () => {
  let component: PlanosaudepacienteComponent;
  let fixture: ComponentFixture<PlanosaudepacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosaudepacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosaudepacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
