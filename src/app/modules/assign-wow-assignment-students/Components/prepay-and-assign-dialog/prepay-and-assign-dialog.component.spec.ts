import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepayAndAssignDialogComponent } from './prepay-and-assign-dialog.component';

describe('PrepayAndAssignDialogComponent', () => {
  let component: PrepayAndAssignDialogComponent;
  let fixture: ComponentFixture<PrepayAndAssignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepayAndAssignDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepayAndAssignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
