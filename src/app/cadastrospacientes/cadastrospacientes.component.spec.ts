import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrospacientesComponent } from './cadastrospacientes.component';

describe('CadastrospacientesComponent', () => {
  let component: CadastrospacientesComponent;
  let fixture: ComponentFixture<CadastrospacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrospacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrospacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
