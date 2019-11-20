import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './few-employees';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}
  getEmployees(): Employee[] {
    return EMPLOYEES;
  }
}




