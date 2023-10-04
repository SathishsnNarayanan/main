import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusTreeComponent } from './syllabus-tree.component';

describe('SyllabusTreeComponent', () => {
  let component: SyllabusTreeComponent;
  let fixture: ComponentFixture<SyllabusTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
