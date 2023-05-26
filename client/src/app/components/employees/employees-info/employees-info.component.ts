import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';

import { getEmployees } from 'src/app/state/employees/employees.action';

import { selectEmployees } from 'src/app/state/employees/employees.selector';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})

export class EmployeesInfoComponent implements OnInit {
  employeeCollection: Employee[] | any;

  constructor(public dialog: MatDialog, private store: Store) { }


  ngOnInit() {
    this.store.dispatch({ type: '[Employee] Get Employees' }); // getEmployees()

    this.store.select(selectEmployees).subscribe(state => {
      this.employeeCollection = state;
    })
  }

  displayedColumns: string[] = ['name', 'age', 'city', 'email', 'prev-comp', 'hire-date', 'department'];

}
