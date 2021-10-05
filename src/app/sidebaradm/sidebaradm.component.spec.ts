import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaradmComponent } from './sidebaradm.component';

describe('SidebaradmComponent', () => {
  let component: SidebaradmComponent;
  let fixture: ComponentFixture<SidebaradmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaradmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaradmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
