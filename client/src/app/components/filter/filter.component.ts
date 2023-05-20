import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCities } from 'src/app/state/employees.selector';
import { selectDeparments } from 'src/app/state/employees.selector';

import { getEmployeesByCity } from 'src/app/state/employees.action';

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
  }
}
