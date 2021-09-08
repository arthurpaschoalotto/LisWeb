import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastropaciente2Component } from './cadastropaciente2.component';

describe('Cadastropaciente2Component', () => {
  let component: Cadastropaciente2Component;
  let fixture: ComponentFixture<Cadastropaciente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cadastropaciente2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastropaciente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
