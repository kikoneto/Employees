import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/data.service';

import { AuthService } from 'src/app/services/auth.service';
import { Store, select } from '@ngrx/store';
import { addEmployee } from 'src/app/state/employees.action';


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})

export class EmployeesFormComponent {

  constructor(private employeeDataService: EmployeeService, private router: Router, private authService: AuthService, private store: Store) { };


  firstNameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  secondNameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  ageControl = new FormControl(null, [Validators.min(16), Validators.required]);
  cityControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.required]);
  companyControl = new FormControl('', [Validators.minLength(2), Validators.required]);
  hireControl = new FormControl('', [Validators.minLength(4), Validators.maxLength(10), Validators.required]);

  isDisabled = true;

  onSubmit() {
    if (this.firstNameControl.invalid || this.secondNameControl.invalid || this.ageControl.invalid || this.cityControl.invalid ||
      this.emailControl.invalid || this.companyControl.invalid || this.hireControl.invalid) {

    } else {
      const newEmployee = new Employee(
        this.firstNameControl.value as string,
        this.secondNameControl.value as string,
        this.ageControl.value || NaN,
        this.cityControl.value as string,
        this.emailControl.value as string,
        this.companyControl.value as string,
        this.hireControl.value as string,
      )

      this.addNewEmployee(newEmployee);
      this.router.navigate(['']);
    }
  }

  addNewEmployee(employee: Employee) {
    this.store.dispatch(addEmployee({ employee }));
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
