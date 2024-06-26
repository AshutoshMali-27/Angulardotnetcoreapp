import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Iemployee } from './Interface/interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

 private  apiUrl:string="https://localhost:7097/api/Employee/";
  
  constructor(private http:HttpClient) { }



  
  getAllEmployees(){
    return this.http.get(this.apiUrl+"GetAllEmployee")
  }


  createemployee(employee:Iemployee){
    return this.http.post(this.apiUrl+"SetAllEmployee",employee)
  }
  
  getemployeebyid(employeeId:number){
    debugger;
    return this.http.get<Iemployee>(this.apiUrl+'GetAllEmployeeByID/'+employeeId)
  }

  Updateemployee(employeeId:number,employee:Iemployee){
    debugger;
    return this.http.put<Iemployee>(this.apiUrl+'updateEmployee/'+employeeId,employee)
  }

  Deleteemployee(employeeId:number){
    debugger;
    return this.http.delete(this.apiUrl+'DeleteEmployee/'+employeeId)
  }

}
