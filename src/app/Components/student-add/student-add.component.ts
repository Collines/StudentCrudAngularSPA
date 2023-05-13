import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent {
  Validation = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
  });
  student = { name: '', email: '' };
  constructor(private myService: StudentService, private router: Router) {}

  get isNameValid() {
    return this.Validation.controls.name.valid;
  }
  get isEmailValid() {
    return this.Validation.controls.email.valid;
  }

  Add() {
    if (this.isNameValid && this.isEmailValid) {
      this.myService.Add(this.student).subscribe({
        next: () => {
          this.router.navigate(['/students']);
        },
      });
    }
  }
}
