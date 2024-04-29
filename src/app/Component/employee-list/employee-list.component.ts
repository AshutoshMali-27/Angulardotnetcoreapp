import { Result } from './../../../../node_modules/arg/index.d';
import { Component, inject } from '@angular/core';
import { Iemployee } from '../../Interface/interface';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
router=inject(Router)
  employeeList:Iemployee[]=[];

  displayedColumns:string[]=['id','code','name','age','email','department','salary','action']
  
  


  constructor(private httpService :HttpService) {}
 
  ngOnInit(): void {
   this.getallemplist()
  }
 

  getallemplist(){
      
    this.httpService.getAllEmployees().subscribe((Response:any)=>{
      this.employeeList=Response;

      console.log(this.employeeList);
    })

  }

  edit(id:number){
    debugger;
    console.log(id);
    this.router.navigateByUrl("/employee/"+id)
  }

  delete(id:number){
    console.log(id);
    
  }
}
