import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewStp1Component } from './tree-view-stp1.component';

describe('TreeViewStp1Component', () => {
  let component: TreeViewStp1Component;
  let fixture: ComponentFixture<TreeViewStp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeViewStp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeViewStp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
