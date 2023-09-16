import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectNameComponent } from './project-name/project-name.component';

const routes: Routes = [
  { path: '', redirectTo: 'project-name', pathMatch: 'full' },
  { path: 'project-name', component: ProjectNameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectNameRoutingModule {}
