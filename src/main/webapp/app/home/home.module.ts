import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentManagementSysSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { CourseService } from 'app/shared/service/CourseService';

@NgModule({
  imports: [StudentManagementSysSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  providers: [CourseService]
})
export class StudentManagementSysHomeModule {}
