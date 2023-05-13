import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: any;
  constructor(private myService: StudentService) {}
  ngOnInit(): void {
    this.myService.GetAll().subscribe({
      next: (d) => {
        this.students = d;
      },
    });
  }
}
