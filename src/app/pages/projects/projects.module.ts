import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
