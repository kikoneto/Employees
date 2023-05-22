import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';

import { getEmployees, changePage, setTotalItems, setOriginalArray } from 'src/app/state/employees.action';

import { selectEmployees, selectPaginatedArray } from 'src/app/state/employees.selector';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})

export class EmployeesInfoComponent implements OnInit {
  employeeCollection: Employee[] | any;
  employeePageCollection: Employee[] | any;

  constructor(public dialog: MatDialog, private store: Store) { }


  ngOnInit() {
    this.store.dispatch(getEmployees());

    this.store.select(selectEmployees).subscribe(state => {
      this.store.dispatch(setOriginalArray({ employees: state }));
      this.store.dispatch(setTotalItems({ totalItems: state.length }));
      this.store.dispatch(changePage({ currentPage: 0 }));
    })

    this.store.select(selectPaginatedArray).subscribe(x => {
      this.employeeCollection = x;
      console.log(x)
    })
  }

  displayedColumns: string[] = ['name', 'age', 'city', 'email', 'prev-comp', 'department'];

}
