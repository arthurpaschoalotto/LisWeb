import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceamentoComponent } from './interfaceamento.component';

describe('InterfaceamentoComponent', () => {
  let component: InterfaceamentoComponent;
  let fixture: ComponentFixture<InterfaceamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
