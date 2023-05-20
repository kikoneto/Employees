import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';

import { EmployeeService } from 'src/app/services/data.service';
import { getEmployees } from 'src/app/state/employees.action';

import { selectEmployees } from 'src/app/state/employees.selector';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})

export class EmployeesInfoComponent implements OnInit {
  employeeCollection: Employee[] | any;

  constructor(private employeeDataService: EmployeeService, public dialog: MatDialog, private store: Store) { }


  ngOnInit() {
    this.store.select(selectEmployees).subscribe(state => {
      this.employeeCollection = state
    })
    this.store.dispatch(getEmployees());
  }

  displayedColumns: string[] = ['name', 'age', 'city', 'email', 'prev-comp', 'department'];

}
