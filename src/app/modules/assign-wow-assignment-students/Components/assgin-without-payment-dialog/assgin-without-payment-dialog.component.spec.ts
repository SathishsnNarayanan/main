import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginWithoutPaymentDialogComponent } from './assgin-without-payment-dialog.component';

describe('AssginWithoutPaymentDialogComponent', () => {
  let component: AssginWithoutPaymentDialogComponent;
  let fixture: ComponentFixture<AssginWithoutPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssginWithoutPaymentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssginWithoutPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
