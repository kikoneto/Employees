import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmployeeService } from '../../services/data.service';
import { Store } from '@ngrx/store';
import { deleteEmployee, getCities, getDepartments } from 'src/app/state/employees/employees.action';
import { Router } from '@angular/router';

@Component({
  selector: 'confirm-modal.component-dialog',
  templateUrl: 'confirm-modal.component-dialog.html',
})

export class ConfirmModal {
  constructor(public dialogRef: MatDialogRef<ConfirmModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: EmployeeService,
    private store: Store,
    private router: Router
  ) { }

  onConfirm() {
    // Delete the employee
    const id: number = this.data.employee.id;
    this.store.dispatch(deleteEmployee({ id }));
    // Set Filter Settings
    this.dataService.setCity('');
    this.dataService.setDepartment('');
    // Achieve all the cities after deletion
    this.store.dispatch(getCities());
    // Achieve all the cities after deletion
    this.store.dispatch(getDepartments());
    // Achieve all the employees after deletion
    this.store.dispatch({ type: '[Employee] Get Employees' });
    // Navigate to /List
    this.router.navigate(['/list'])
  }
}