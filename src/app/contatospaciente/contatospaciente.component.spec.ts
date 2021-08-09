import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatospacienteComponent } from './contatospaciente.component';

describe('ContatospacienteComponent', () => {
  let component: ContatospacienteComponent;
  let fixture: ComponentFixture<ContatospacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatospacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatospacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
