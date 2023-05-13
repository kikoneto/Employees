import { Component, OnInit } from '@angular/core';

import { Employee } from '../../../models/employee.model';
import { EmployeeDataService } from '../../../services/data.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService) { }

  employeeCollection: Employee[] = [];

  ngOnInit() {
    this.employeeDataService.getCollection().subscribe((item) => {
      this.employeeCollection = item;
    })
  }

}
