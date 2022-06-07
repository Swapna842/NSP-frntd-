import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studentregis } from './studentregis';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  response:any;
  constructor(private myhttp:HttpClient) { }
restURL:string="http://localhost:8086/nsp/studentregister";

/*getStudent()
{
  return this.myhttp.get(this.restURL+"/AllStudentRegistred")
}*/
addStudent(add:Studentregis)
{
  console.log(add);
  return this.myhttp.post(this.restURL+"/studentregister",add)
}
}
