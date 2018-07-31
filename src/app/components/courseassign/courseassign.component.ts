import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courseassign-form',
  templateUrl: './courseassign.component.html',
  styleUrls: ['./courseassign.component.css']
})
export class CourseassignComponent {
  category = [
    { id: 1, name: 'Developement'},
    { id: 2, name: 'Art'},
    { id: 3, name: 'Languages'}
  ]

  create(f) {
    console.log(f);
  }

}
