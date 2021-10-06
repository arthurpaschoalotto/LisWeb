import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarpacienteComponent } from './mostrarpaciente.component';

describe('MostrarpacienteComponent', () => {
  let component: MostrarpacienteComponent;
  let fixture: ComponentFixture<MostrarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarpacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
