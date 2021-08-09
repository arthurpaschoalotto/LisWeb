import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbalateralComponent } from './abalateral.component';

describe('AbalateralComponent', () => {
  let component: AbalateralComponent;
  let fixture: ComponentFixture<AbalateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbalateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbalateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
