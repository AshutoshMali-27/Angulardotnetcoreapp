import { HttpService } from './../../http.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Iemployee } from '../../Interface/interface';
import { Router, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatInputModule,MatButton,FormsModule,ReactiveFormsModule,RouterLinkWithHref],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {

  employeeList:Iemployee[]=[];
  employeefrom:FormGroup=new FormGroup({});
  router=inject(Router)

  constructor( private fb:FormBuilder,private HttpService:HttpService) {}

  ngOnInit(): void {
      this.setemployee();
  }

  setemployee(){

    this.employeefrom=this.fb.group({
      
      name:[""] ,
      email:[""],
      code:[""],
      department:[""],
      age:[""],
      salary:[""],
    })

  }
  get f(){
    return this.employeefrom.controls;
    
  }

  formsubmit(){
console.log(this.employeefrom.value);
const employee :Iemployee={
  name:this.employeefrom.value.name!,  
  email:this.employeefrom.value.email!,
  code:this.employeefrom.value.code!,
  department:this.employeefrom.value.department!,
  age:this.employeefrom.value.age!,
  salary:this.employeefrom.value.salary!,
};

this.HttpService.createemployee(employee).subscribe(()=>{
  console.log("success");
 this.router.navigateByUrl("/employee-list");
})

}
}
