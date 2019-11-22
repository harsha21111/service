import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  employees: Employee[];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employees = this.dataService.getEmployees();
  }
  loadData(event) {
    setTimeout(() => {
      event.target.complete();
  //     if (this.employees.length === 1000) {
  //       event.target.disabled = true;
  //     }
     }, 500);
   }


}
