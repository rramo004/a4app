import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }
  getAuthors() {
    return ["Joe Marks", "Jon Doe", "Lisa Anthem"];
  }
}
