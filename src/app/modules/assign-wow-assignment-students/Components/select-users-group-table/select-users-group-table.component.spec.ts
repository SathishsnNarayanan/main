import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUsersGroupTableComponent } from './select-users-group-table.component';

describe('SelectUsersGroupTableComponent', () => {
  let component: SelectUsersGroupTableComponent;
  let fixture: ComponentFixture<SelectUsersGroupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUsersGroupTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUsersGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
