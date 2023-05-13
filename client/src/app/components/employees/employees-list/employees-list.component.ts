import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from '../../../models/employee.model';
import { EmployeeDataService } from '../../../services/data.service';

import { ConfirmModal } from '../../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService, public dialog: MatDialog) { }

  employeeCollection: Employee[] = [];

  ngOnInit() {
    this.employeeDataService.getCollection().subscribe((item) => {
      this.employeeCollection = item;
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, employee: Employee): void {
    this.dialog.open(ConfirmModal, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        firstName: employee.identity.firstName,
        secondName: employee.identity.secondName,
        age: employee.identity.age,
        email: employee.email,
        jobDesription: employee.jobDescription,
        hireDate: employee.hireDate,
      }
    });
  }



  displayedColumns: string[] = ['name', 'age', 'job-description', 'buttons'];
}
