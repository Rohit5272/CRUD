import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';

const baseUrl = "http://localhost:3000/api"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  postStudent(stu:Student) {
    return this.http.post(`${baseUrl}`,stu)
  }

  getStudent() {
    return this.http.get(`${baseUrl}`)
  }

  getSingleStudent(id:any) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  updateStudent(id:any,data:any) {
    return this.http.put(`${baseUrl}/${id}`,data)
  }

  deleteStudent(id:any) {
    return this.http.delete(`${baseUrl}/${id}`)
  }
}
