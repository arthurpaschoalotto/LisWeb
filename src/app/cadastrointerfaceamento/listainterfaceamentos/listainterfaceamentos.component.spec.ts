import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListainterfaceamentosComponent } from './listainterfaceamentos.component';

describe('ListainterfaceamentosComponent', () => {
  let component: ListainterfaceamentosComponent;
  let fixture: ComponentFixture<ListainterfaceamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListainterfaceamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListainterfaceamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
