import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from '../../../models/employee.model';
import { EmployeeDataService } from '../../../services/data.service';


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})

export class EmployeesFormComponent {

  constructor(private employeeDataService: EmployeeDataService, private router: Router) { };


  firstNameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  secondNameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  ageControl = new FormControl(null, [Validators.min(16), Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.required]);
  jobDescControl = new FormControl('', [Validators.minLength(2), Validators.required]);
  hireControl = new FormControl('', [Validators.minLength(4), Validators.maxLength(10), Validators.required]);

  isDisabled = true;

  onSubmit() {
    if (this.firstNameControl.invalid || this.secondNameControl.invalid || this.ageControl.invalid ||
      this.emailControl.invalid || this.jobDescControl.invalid || this.hireControl.invalid) {
      console.log('invalid');
    } else {
      this.employeeDataService.setData(
        new Employee(
          this.firstNameControl.value as string,
          this.secondNameControl.value as string,
          this.ageControl.value || NaN,
          this.jobDescControl.value as string,
          this.hireControl.value as string,
          this.emailControl.value as string)
      );
      this.router.navigate(['']);
    }
  }


  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    else if (control.hasError('email')) {
      return 'Not a valid email';
    }
    else if (control.hasError('min')) {
      return 'Minimum Age is 16';
    }
    else if (control.hasError('minlength')) {
      return 'At least 4 char';
    }
    return '';
  }
}
