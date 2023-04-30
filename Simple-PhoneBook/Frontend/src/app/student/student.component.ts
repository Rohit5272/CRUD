import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  students!: Student[];
  studentForm!: FormGroup<any>;
  option = 'send';

  constructor(public studentService:StudentService,private fb:FormBuilder) {
    this.studentForm = this.fb.group({
      _id:'',
      name:'',
      phone:''
    })
  }

  ngOnInit() {
    this.getAllStudent();
  }

  edit(data:Student) {
    this.studentForm = this.fb.group({
      _id : data._id,
      name :data.name,
      phone:data.phone
    })
    this.option = 'edit'
  }

  getAllStudent() {
    this.resetItem()
    this.studentService.getStudent().subscribe(res => {
      this.students = res as Student[];
    })
  }

  onSubmit(stu:Student) {
    if(this.option == 'send') {
      this.studentService.postStudent(stu).subscribe(res => {
        console.log(res)
        this.getAllStudent();
      })
    }
    else {
      this.studentService.updateStudent(stu._id,stu).subscribe(res => {
        console.log(res)
        this.getAllStudent()
      })
    }
    this.option = 'send'
  }

  onDelete(id:any) {
    this.studentService.deleteStudent(id).subscribe(res => {
      console.log(res);
      this.getAllStudent();
    })
  }

  resetItem() {
    this.studentForm = this.fb.group({
      _id:'',
      name:'',
      phone:''
    })
  }

}
