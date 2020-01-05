import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StudentManagementSysSharedModule } from 'app/shared/shared.module';
import { StudentManagementSysCoreModule } from 'app/core/core.module';
import { StudentManagementSysAppRoutingModule } from './app-routing.module';
import { StudentManagementSysHomeModule } from './home/home.module';
import { StudentManagementSysEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    StudentManagementSysSharedModule,
    StudentManagementSysCoreModule,
    StudentManagementSysHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    StudentManagementSysEntityModule,
    StudentManagementSysAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class StudentManagementSysAppModule {}
