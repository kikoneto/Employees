import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCities, selectCurrentPage, selectPageSize } from 'src/app/state/employees.selector';
import { selectDeparments } from 'src/app/state/employees.selector';

import { changePage, getEmployees, getEmployeesByCity, getEmployeesByDepartment } from 'src/app/state/employees.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  cities: any;
  departments: any;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch({ type: '[City] Get Cities' });
    this.store.dispatch({ type: '[Department] Get Departments' });
    this.store.select(selectCities).subscribe(x => {
      this.cities = x.map(x => Object.values(x))
    });
    this.store.select(selectDeparments).subscribe(x => {
      this.departments = x.map(x => Object.values(x));
    })
  }

  setCityEmployess(result: string) {
    const city = Object.values(result)[0];
    this.store.dispatch(getEmployeesByCity({ city }))
    this.store.dispatch(changePage({ currentPage: 0 }));
    this.store.select(selectPageSize).subscribe(x => console.log(x));
    this.store.select(selectCurrentPage).subscribe(x => console.log(x));
  }

  setDepartmentEmployees(result: string) {
    const department = Object.values(result)[0];
    this.store.dispatch(getEmployeesByDepartment({ department }));
    this.store.dispatch(changePage({ currentPage: 0 }));
    this.store.select(selectPageSize).subscribe(x => console.log(x));
    this.store.select(selectCurrentPage).subscribe(x => console.log(x));
  }

  setDefaultEmployees() {
    this.store.dispatch(getEmployees());
    this.store.dispatch(changePage({ currentPage: 0 }));
  }
}
