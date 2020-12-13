import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses = courses;
}