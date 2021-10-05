import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoinstrumentoComponent } from './tipoinstrumento.component';

describe('TipoinstrumentoComponent', () => {
  let component: TipoinstrumentoComponent;
  let fixture: ComponentFixture<TipoinstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoinstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoinstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
