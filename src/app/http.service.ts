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

}
