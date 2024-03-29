import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Studentregis } from '../studentregis';


@Component({
  selector: 'app-std-reg',
  templateUrl: './std-reg.component.html',
  styleUrls: ['./std-reg.component.css']
})
export class StdRegComponent implements OnInit {
  vhs: any;

  constructor() { }

  ngOnInit(): void {
  }

  form=new FormGroup({
    'state':new FormControl('',Validators.required),
    'dist':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'dob':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'institutionCode':new FormControl('',Validators.required),
    'aadharNumber':new FormControl('',Validators.required),
    'ifsc':new FormControl('',Validators.required),
    'accountno':new FormControl('',Validators.required),
    'bankname':new FormControl('',Validators.required),
    'setPassword':new FormControl('',Validators.required),
    'confirmPassword':new FormControl('',Validators.required)
  });
  student:Studentregis=new Studentregis();
  saveStudent()
  {
      this.student=this.form.value;
      console.log(this.form.value)
      console.log(this.student)

      this.vhs.addStudent(this.student).subscribe(
        (data: any)=>{
          console.log(data);
          alert("Registration done")
        },
        (error: any)=>
        {
          console.log(error)
        }
      )
  }
}
