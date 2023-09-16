import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectNameRoutingModule } from './project-name-routing.module';
import { ProjectNameComponent } from './project-name/project-name.component';

@NgModule({
  declarations: [ProjectNameComponent],
  imports: [CommonModule, SharedModule, ProjectNameRoutingModule],
})
export class ProjectNameModule {}
