import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from 'src/app/models/employee.model';

import { ConfirmModal } from '../../confirm-modal/confirm-modal.component';

import { Store, select } from '@ngrx/store';
import { selectEmployees } from 'src/app/state/employees.selector';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {

  constructor(public dialog: MatDialog, private store: Store) { }

  employeeCollection: Employee[] | any;


  ngOnInit() {
    this.employeeCollection = this.store.select(selectEmployees);
    this.store.dispatch({ type: '[Employee] Get Employees' });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, employee: Employee): void {
    this.dialog.open(ConfirmModal, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        employee
      }
    });
  }
  displayedColumns: string[] = ['name', 'age', 'city', 'email', 'prev-comp', 'hire-date', 'department', 'buttons'];

}
