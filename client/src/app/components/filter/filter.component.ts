import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectDeparments, selectCities } from 'src/app/state/employees/employees.selector';

import { getEmployees } from 'src/app/state/employees/employees.action';
import { EmployeeService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  cities: any;
  departments: any;

  city: string = '';
  department: string = '';

  constructor(private service: EmployeeService, private store: Store) { }

  ngOnInit() {
    this.store.dispatch({ type: '[City] Get Cities' });
    this.store.dispatch({ type: '[Department] Get Departments' });

    this.store.select(selectCities).subscribe(x => {
      this.cities = x.map(x => Object.values(x))
    });
    this.store.select(selectDeparments).subscribe(x => {
      this.departments = x.map(x => Object.values(x));
    })

    this.service.setCity(this.city);
    this.service.setDepartment(this.department);
  }

  setCityEmployess(result: string) {
    // Set City
    const city = result[0];
    this.city = city;
    this.service.setCity(city);

    // Make Request to get by city and remove department if there is such.
    if (this.department != '') {
      // Remove Department
      this.department = '';
      this.service.setDepartment('');
    }
    this.store.dispatch(getEmployees({ city: city }))
  }

  setDepartmentEmployees(result: string) {
    // Set Department
    const department = result[0];
    this.department = department;

    // Make Request based on city and department
    this.service.setDepartment(department);
    if (this.city != '') {
      this.store.dispatch(getEmployees({ city: this.city, department: department }));
    } else {
      this.store.dispatch(getEmployees({ department: department }));
    }
  }

  setDefaultEmployees() {
    // Set City Settings
    this.city = '';
    this.service.setCity('');
    // Set Department Settings
    this.department = '';
    this.service.setDepartment('');
    // Get the employees
    this.store.dispatch(getEmployees({})); // getEmployees
  }
}
