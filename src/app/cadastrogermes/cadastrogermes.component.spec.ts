import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrogermesComponent } from './cadastrogermes.component';

describe('CadastrogermesComponent', () => {
  let component: CadastrogermesComponent;
  let fixture: ComponentFixture<CadastrogermesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrogermesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrogermesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
