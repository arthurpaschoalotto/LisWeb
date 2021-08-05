import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacienteP2Component } from './cadastro-paciente-p2.component';

describe('CadastroPacienteP2Component', () => {
  let component: CadastroPacienteP2Component;
  let fixture: ComponentFixture<CadastroPacienteP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPacienteP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPacienteP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
