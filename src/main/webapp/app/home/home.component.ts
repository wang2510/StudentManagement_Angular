import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { CourseService } from 'app/shared/service/CourseService';
import { CourseWithTNDto } from 'app/model/courseWithTN-dto.model';
import { CourseDto } from 'app/model/course-dto.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  classNameNeedToReg: string | null = null;
  courses: CourseDto[] = [];
  coursesWithTN: CourseWithTNDto[] = [];

  constructor(private accountService: AccountService, private loginModalService: LoginModalService, private courseService: CourseService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  getAllCourses() {
    this.courseService.getCourseInfo().subscribe(curDto => {
      if (!curDto) {
        this.courses = [];
      } else {
        this.courses = curDto;
      }
    });
  }

  getAllCoursesWithTN() {
    this.courseService.getCourseInfoWithTN().subscribe(curDto => {
      if (!curDto) {
        this.coursesWithTN = [];
      } else {
        this.coursesWithTN = curDto;
      }
    });
  }

  clearAllCourses() {
    this.courses = [];
  }

  addCourseToStudent() {
    const courseName = 'temp';
    this.courseService.addCourseToStudent(courseName);
  }
}
