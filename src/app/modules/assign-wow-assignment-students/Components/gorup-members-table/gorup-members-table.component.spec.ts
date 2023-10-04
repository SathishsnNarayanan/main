import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorupMembersTableComponent } from './gorup-members-table.component';

describe('GorupMembersTableComponent', () => {
  let component: GorupMembersTableComponent;
  let fixture: ComponentFixture<GorupMembersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorupMembersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorupMembersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
