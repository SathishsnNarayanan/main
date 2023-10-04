import { SelectionModel } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { CustomSpinnerService } from 'src/app/shared/services/custom-spinner/custom-spinner.service';
import { DataSharingService } from 'src/app/shared/services/data-sharing/data-sharing.service';
import { SnackBarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { MatCheckbox } from '@angular/material/checkbox';
import { TreeData } from 'src/app/models/syllabus-tree.interface';

@Component({
  selector: 'app-tree-view-stp1',
  templateUrl: './tree-view-stp1.component.html',
  styleUrls: ['./tree-view-stp1.component.scss'],
})
export class TreeViewStp1Component implements OnInit {
  //* ---------------------------  Constructor  ----------------------------*//

  @Input('data_share_1') data_share_1: any;
  @Output() tree_view_output = new EventEmitter<any>();
  constructor(
    private _apiService: ApiService,
    private _dataShareService: DataSharingService,
    private _snackbar_service: SnackBarService,
    private _spinner: CustomSpinnerService
  ) {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(
      this._getChildren
    );
    this.nestedDataSource = new MatTreeNestedDataSource();
  }

  //* -----------------------  Variable Declaration  -----------------------*//

  //* -------------------------  Lifecycle Hooks  --------------------------*//
  check_id_1: any;
  check_id_2: any;
  course_subject_user_category_allocation_id: any;
  ngOnInit(): void {
    // this.loadData();
    this.nestedDataSource.data  = this.sample_data;
  }
  sample_data: any = [
    {
      user_category_id: 5011,
      parent_user_category_id: null,
      user_category_name: 'SACRED HEART',
      is_the_category_hidden: 0,
      category_type: 2,
      children: [
        {
          user_category_id: 5012,
          parent_user_category_id: '5011',
          user_category_name: 'SHIFT 1',
          is_the_category_hidden: 0,
          category_type: 2,
          children: [
            {
              user_category_id: 5013,
              parent_user_category_id: '5012',
              user_category_name: 'BCA',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5014,
              parent_user_category_id: '5012',
              user_category_name: 'BSC',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5015,
              parent_user_category_id: '5012',
              user_category_name: 'MATHS',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5016,
              parent_user_category_id: '5012',
              user_category_name: 'PHYSICS',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5017,
              parent_user_category_id: '5012',
              user_category_name: 'CS',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5018,
              parent_user_category_id: '5012',
              user_category_name: 'TAMIL',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
          ],
        },
        {
          user_category_id: 5019,
          parent_user_category_id: '5011',
          user_category_name: 'SHIFT 2',
          is_the_category_hidden: 0,
          category_type: 2,
          children: [
            {
              user_category_id: 5020,
              parent_user_category_id: '5019',
              user_category_name: 'BCA',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5021,
              parent_user_category_id: '5019',
              user_category_name: 'BSC',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5022,
              parent_user_category_id: '5019',
              user_category_name: 'MATHS',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5023,
              parent_user_category_id: '5019',
              user_category_name: 'PHYSICS',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5024,
              parent_user_category_id: '5019',
              user_category_name: 'CS',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
            {
              user_category_id: 5025,
              parent_user_category_id: '5019',
              user_category_name: 'TAMIL',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },

            {
              user_category_id: 5026,
              parent_user_category_id: '5019',
              user_category_name: 'Management',
              is_the_category_hidden: 0,
              category_type: 2,
              children: [],
            },
          ],
        },
      ],
    },
  ];

  @ViewChild('myCheckbox') myCheckbox!: MatCheckbox;

  loadData() {
     }

  ngOnChanges(): void {
    // console.log(this.data_share_1, 'data_____________share');
    this.loadData();
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  check_checkbox_id: any;
  is_select_all: boolean = true;
  is_select_all_check: boolean = true;
  get_values_from_tree() {
    this.is_select_all_check = false;
    // this.value_from_treeview_selected = _data.source.value;
    // this.check_checkbox_id = this.checklistSelection11.selected;
    let datas1: any = [];
    for (let i = 0; i < this.checklistSelection11.selected.length; i++) {
      // datas.push(this.check_checkbox_id[i].syllabus_id);
      let a = this.checklistSelection11.selected;
      // console.log(a,'node');
      let datas: any = a[i]?.syllabus_id;
      datas1.push(datas);
    }
    // console.log(this.checklistSelection11.selected,'12123345');
    // console.log(datas1, 'node');
    // console.log(this.check_checkbox_id,'datas');
    // this._dataShareService.table_based_on_trees(datas1);
    this.tree_view_output.emit(datas1);
  }
  //* ----------------------------  APIs Methods  --------------------------*//

  //* --------------------------  Public methods  --------------------------*//
  value_from_treeview_selected: any;

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    let a: any = this.checklistSelection11.selected;
    const syllabusNames = a.map((syllabus: any) => syllabus.syllabus_name);
    this.value_from_treeview_selected = syllabusNames;
  }
  // *---------------------------------Tree Structure--------------------------------------*//
  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;
  checklistSelection11 = new SelectionModel<TreeData>(true /* multiple */);
  selected_category_val11: any = [];
  private _getChildren = (node: TreeData) => of(node.children);
  select_all: boolean = false;
  totalNodeCount: any;
  hasNestedChild = (_: string, nodeData: TreeData) =>
    nodeData.children.length > 0;

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = [];
    this.nestedDataSource.data = data;
  }

  getLevel = (node: TreeData): any => node.level;

  isExpandable = (node: TreeData) => node.expandable;

  /* Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TreeData): boolean {
    const descendants = this.nestedTreeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) =>
      this.checklistSelection11.isSelected(child)
    );
    return descAllSelected;
  }
  /* Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeData): boolean {
    const descendants = this.nestedTreeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection11.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /* Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TreeData): void {
    this.checklistSelection11.toggle(node);
    const descendants = this.nestedTreeControl.getDescendants(node);
    this.checklistSelection11.isSelected(node)
      ? this.checklistSelection11.select(...descendants)
      : this.checklistSelection11.deselect(...descendants);

    // Force update for the parent
    descendants.every((child) => this.checklistSelection11.isSelected(child));
    // this.checkAllParentsSelection(node);
    this.selected_category_val11 = this.checklistSelection11.selected;
    if (this.selected_category_val11.length == this.totalNodeCount - 1) {
      this.select_all = true;
    } else {
      this.select_all = false;
    }
  }

  /* Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: any): void {
    //
    this.checklistSelection11.toggle(node);

    this.selected_category_val11 = this.checklistSelection11.selected;
    if (this.selected_category_val11.length>0) {
      this.select_all = true;
    } else {
      this.select_all = false;
    }
    // this.checkAllParentsSelection(node);
  }

  todoLeafItemSelectionToggle1(node: any): void {
    this.is_select_all_check = false;
    let datas1: any = [];
    for (let i = 0; i < this.checklistSelection11.selected.length; i++) {
      let a = this.checklistSelection11.selected;
      let datas: any = a[i]?.syllabus_id;
      datas1.push(datas);
    }
    // this._dataShareService.table_based_on_trees(datas1);
    this.tree_view_output.emit(datas1);
    // console.log(datas1);

    this.selected_category_val11 = this.checklistSelection11.selected;
    if (this.selected_category_val11.length>0) {
      this.select_all = true;
    } else {
      this.select_all = false;
    }
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  // checkAllParentsSelection(node: TreeData): void {
  //   let parent: TreeData | null = this.getParentNode(node);
  //   while (parent) {
  //     this.checkRootNodeSelection(parent);
  //     parent = this.getParentNode(parent);
  //   }
  // }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TreeData): void {
    const nodeSelected = this.checklistSelection11.isSelected(node);
    const descendants = this.nestedTreeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) =>
      this.checklistSelection11.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection11.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection11.select(node);
    }
  }
  total_count: any[] = [];
  selectAll() {
      // this.checklistSelection11.clear(true);
      // this.nestedDataSource.data.map((node) => {
      //   this.callRecursion(node);
      // });

  }

  check_select_syllabus_id(_data:any) {
    // console.log(_data);
    if(_data.checked == true) {
      this.checklistSelection11.clear(true);
      this.nestedDataSource.data.map((node) => {
        this.callRecursion(node);
      });
      this.is_select_all_check = false;
      let datas1: any = [];
      for (let i = 0; i < this.checklistSelection11.selected.length; i++) {
        let a = this.checklistSelection11.selected;
        let datas: any = a[i]?.syllabus_id;
        datas1.push(datas);
      }
    // console.log(datas1);

      // this._dataShareService.table_based_on_trees(datas1);
    this.tree_view_output.emit(datas1);
    }else{
      this.is_select_all_check = false;
      let datas1: any = [null];
    // console.log(datas1);

      // this._dataShareService.table_based_on_trees(datas1);
    this.tree_view_output.emit(datas1);

    }
  }

  callRecursion(node: any) {
    this.checklistSelection11.isSelected(node);
    this.total_count.push(node);
    this.todoLeafItemSelectionToggle(node);
    this.nestedTreeControl.expand(node);
    if (node.children) {
      node.children.forEach((childNode: any) => {
        this.callRecursion(childNode);
      });
    }
  }

  unselectAll() {
    this.checklistSelection11.clear(true);
    // this.nestedTreeControl.expandAll();
    this.nestedTreeControl.collapseAll();
    // this._dataShareService.table_based_on_trees(null);
  }
}

//* ------------------------------ Helper Function -----------------------*//

//! -------------------------------  End  --------------------------------!//
