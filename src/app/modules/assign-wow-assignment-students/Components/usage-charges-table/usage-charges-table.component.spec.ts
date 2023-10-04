import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageChargesTableComponent } from './usage-charges-table.component';

describe('UsageChargesTableComponent', () => {
  let component: UsageChargesTableComponent;
  let fixture: ComponentFixture<UsageChargesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageChargesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageChargesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
