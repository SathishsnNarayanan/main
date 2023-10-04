import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignWowAssignmentStudentsComponent } from './assign-wow-assignment-students/assign-wow-assignment-students.component';
import { AssignWowAssignmentStudentsRoutingModule } from './assign-wow-assignment-students-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SyllabusTreeComponent } from './Components/syllabus-tree.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { TreeViewStp1Component } from './Components/tree-view-stp1.component/tree-view-stp1.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { SelectorsComponent } from './Components/selectors/selectors.component';
import { SelectComponent } from './Components/select/select.component';
import { StudentListTableComponent } from './Components/student-list-table/student-list-table.component';
import { GorupMembersTableComponent } from './Components/gorup-members-table/gorup-members-table.component';
import { UsageChargesTableComponent } from './Components/usage-charges-table/usage-charges-table.component';
import { SelectUsersGroupTableComponent } from './Components/select-users-group-table/select-users-group-table.component';
import { PrepayAndAssignDialogComponent } from './Components/prepay-and-assign-dialog/prepay-and-assign-dialog.component';
import { AssginWithoutPaymentDialogComponent } from './Components/assgin-without-payment-dialog/assgin-without-payment-dialog.component';
import { WOWAssignmentNameTableComponent } from './Components/wow-assignment-name-table/wow-assignment-name-table';
import { AssessmentsRelevantSyllabusSelectionComponent } from './Components/assessments-relevant-syllabus-selection/assessments-relevant-syllabus-selection.component';
// import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AssignWowAssignmentStudentsComponent,
    SyllabusTreeComponent,
    WOWAssignmentNameTableComponent,
    StudentListTableComponent,
    TreeViewStp1Component,
    SelectorsComponent,
    SelectComponent,
    GorupMembersTableComponent,
    UsageChargesTableComponent,
    SelectUsersGroupTableComponent,
    PrepayAndAssignDialogComponent,
    AssginWithoutPaymentDialogComponent,
    AssessmentsRelevantSyllabusSelectionComponent


  ],
  imports: [
    CommonModule,
    AssignWowAssignmentStudentsRoutingModule,
    SharedModule,
    CKEditorModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    // NgxStarRatingModule


  ]
})
export class AssignWowAssignmentStudentsModule { }
