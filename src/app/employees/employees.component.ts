import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employees = this.dataService.getEmployees();
  }

}
