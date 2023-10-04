import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WOWAssignmentNameTableComponent } from './wow-assignment-name-table';




describe('TableComponent', () => {
  let component: WOWAssignmentNameTableComponent;
  let fixture: ComponentFixture<WOWAssignmentNameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WOWAssignmentNameTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WOWAssignmentNameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
