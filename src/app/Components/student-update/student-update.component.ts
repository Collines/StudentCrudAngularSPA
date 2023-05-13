import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {
  Validation = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
  });
  Id: number;
  student: any;
  constructor(
    myRoute: ActivatedRoute,
    private myService: StudentService,
    private router: Router
  ) {
    this.Id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetById(this.Id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {},
    });
  }
  updateStudent() {
    if (this.isNameValid && this.isEmailValid) {
      this.myService.Update(this.Id, this.student).subscribe({
        next: () => {
          this.router.navigate(['/students']);
        },
      });
    }
  }
  get isNameValid() {
    return this.Validation.controls.name.valid;
  }
  get isEmailValid() {
    return this.Validation.controls.email.valid;
  }
}
