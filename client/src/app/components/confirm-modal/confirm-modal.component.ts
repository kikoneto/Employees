import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmployeeService } from '../../services/data.service';
import { Store } from '@ngrx/store';
import { deleteEmployee } from 'src/app/state/employees.action';
import { Router } from '@angular/router';

@Component({
  selector: 'confirm-modal.component-dialog',
  templateUrl: 'confirm-modal.component-dialog.html',
})

export class ConfirmModal {
  constructor(public dialogRef: MatDialogRef<ConfirmModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: EmployeeService,
    private store: Store) { }

  onConfirm() {
    const id: number = this.data.employee.id;
    this.store.dispatch(deleteEmployee({ id }));
    this.store.dispatch({ type: '[Employee] Get Employees' });
  }
}