import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignWowAssignmentStudentsComponent } from './assign-wow-assignment-students/assign-wow-assignment-students.component';

const routes: Routes = [
  { path: '', redirectTo: 'Assign-WOW-Assignment-To-Student', pathMatch: 'full' },
  { path: 'Assign-WOW-Assignment-To-Student', component: AssignWowAssignmentStudentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignWowAssignmentStudentsRoutingModule {}
