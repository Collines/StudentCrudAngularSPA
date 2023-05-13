import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private myClient: HttpClient) {}
  private baseURL = 'http://localhost:3000/users';
  GetAll() {
    return this.myClient.get(this.baseURL);
  }
  GetById(id: any) {
    return this.myClient.get(this.baseURL + '/' + id);
  }
  Update(id: any, Student: any) {
    return this.myClient.patch(this.baseURL + '/' + id, Student);
  }
  Delete(id: any, Student: any) {
    return this.myClient.delete(this.baseURL + '/' + id, Student);
  }
  Add(student: any) {
    return this.myClient.post(this.baseURL, student);
  }
}
