import { CoursesService } from '../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses', // <courses>
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  _title = "Courses"
  text = " lkasjfd;lajdflkja ;lkajdsf;lakjdsf;l kajdsf;lakf l;kj;lkdsjf;la    ;ajdf;lakjdsf;lkajds;lfkjadskjhfiuewyinfdlkjgh lkahdflkhadkfhjasdlkfhadskfjhads;lkfh";
  course = {
    title: "The Complete Angular Course",
    rating: 4.97,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  // _title = "3 Authors";
  // _courses;
  // _imageURL;
  // _colSpan = 2;
  // _isActive = true;
  constructor(service: CoursesService) {
    // this._courses = service.getAuthors();
    // this._imageURL = "http://lorempixel.com/400/200";
    
  }

  ngOnInit() {
  }

  onSave($event) {
    // $event.stopPropagation();
    // this._title = "Modded Title";
    // console.log("isClick", $event);
  }

  onKeyUp() {
     console.log("Key was pressed and updated");
  }

}
