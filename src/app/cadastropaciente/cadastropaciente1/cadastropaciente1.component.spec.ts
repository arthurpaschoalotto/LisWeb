import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastropaciente1Component } from './cadastropaciente1.component';

describe('Cadastropaciente1Component', () => {
  let component: Cadastropaciente1Component;
  let fixture: ComponentFixture<Cadastropaciente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cadastropaciente1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastropaciente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
