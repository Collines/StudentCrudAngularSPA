import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'tr[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  modal: any;

  constructor(private myService: StudentService, private router: Router) {}
  openModal(m: any) {
    this.modal = new window.bootstrap.Modal(m);
    this.modal.show();
  }
  closeModal(m: any) {
    this.modal.hide();
  }
  Delete() {
    this.myService.Delete(this.student.id, this.student).subscribe({
      next: () => {
        this.modal.hide();
        location.reload();
      },
    });
  }
  @Input() student: any = {};
}
