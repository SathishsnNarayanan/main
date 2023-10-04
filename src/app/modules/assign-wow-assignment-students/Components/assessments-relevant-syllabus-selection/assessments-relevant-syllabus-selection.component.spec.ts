import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsRelevantSyllabusSelectionComponent } from './assessments-relevant-syllabus-selection.component';

describe('AssessmentsRelevantSyllabusSelectionComponent', () => {
  let component: AssessmentsRelevantSyllabusSelectionComponent;
  let fixture: ComponentFixture<AssessmentsRelevantSyllabusSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentsRelevantSyllabusSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentsRelevantSyllabusSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
