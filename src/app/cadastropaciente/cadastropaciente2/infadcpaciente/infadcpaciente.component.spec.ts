import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfadcpacienteComponent } from './infadcpaciente.component';

describe('InfadcpacienteComponent', () => {
  let component: InfadcpacienteComponent;
  let fixture: ComponentFixture<InfadcpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfadcpacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfadcpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
