import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line: class-name
interface iStudent {
  ID?: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<iStudent> = [];

  constructor() {
    this.students[0] = {
      ID: 1,
      firstName: 'Jimmy',
      lastName: 'Clark',
      course: 'Programming'
    };
    this.students[1] = {
      ID: 1,
      firstName: 'Mike',
      lastName: 'Clark',
      course: 'Business'
    };
    this.students[2] = {
      ID: 1,
      firstName: 'Rick',
      lastName: 'Clark',
      course: 'Politics'
    };
  }

  ngOnInit() {
  }
  addStudent() {
    const student = {
      ID: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      course: 'Boxing'
    };
    this.students.push(student);
  }
}
