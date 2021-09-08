import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecopacienteComponent } from './enderecopaciente.component';

describe('EnderecopacienteComponent', () => {
  let component: EnderecopacienteComponent;
  let fixture: ComponentFixture<EnderecopacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecopacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecopacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
