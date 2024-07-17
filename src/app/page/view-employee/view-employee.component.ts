import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {

  public employeeList:any;

  constructor(private http:HttpClient){
    this.loadEmployeeTable()
  }

  loadEmployeeTable(){
    this.http.get("http://localhost:8080/emp-controller/get-all").subscribe(res=>{
      
      this.employeeList = res;
      console.log(res);
      
    })
  }

}
