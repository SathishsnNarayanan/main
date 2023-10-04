import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWowAssignmentStudentsComponent } from './assign-wow-assignment-students.component';

describe('AssignWowAssignmentStudentsComponent', () => {
  let component: AssignWowAssignmentStudentsComponent;
  let fixture: ComponentFixture<AssignWowAssignmentStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignWowAssignmentStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignWowAssignmentStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
