import { MOCKCOURSES } from '../mock-courses';
import { Component } from '@angular/core';
import { Course } from '../course';
import { countReset } from 'console';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[];  
  selectedCourse : Course;
  
  constructor(private CourseService: CourseService){

  }

  ngOnInit() {
    this.getCourses();
  }

  onSelect (course: Course): void{
    this.selectedCourse = course;
  }

  getCourses() : void {
    this.CourseService.getCourses().subscribe(courses => this.courses=courses);
  }
}
