import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  Id: any;
  Student: any;

  constructor(myRoute: ActivatedRoute, private studService: StudentService) {
    this.Id = myRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.studService.GetById(this.Id).subscribe({
      next: (data) => {
        this.Student = data;
      },
      error: (err) => {},
    });
  }
}
