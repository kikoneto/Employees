import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmployeeDataService } from '../../services/data.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'confirm-modal.component-dialog',
  templateUrl: 'confirm-modal.component-dialog.html',
})

export class ConfirmModal {
  constructor(public dialogRef: MatDialogRef<ConfirmModal>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private dataService: EmployeeDataService) { }

  onConfirm() {
    console.log(this.data.email)
    this.dataService.delData(this.data.email);
  }
}