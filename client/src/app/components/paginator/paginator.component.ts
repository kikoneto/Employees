import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { selectCount, selectPage } from 'src/app/state/employees/employees.selector';
import { Store } from '@ngrx/store';
import { getEmployees } from 'src/app/state/employees/employees.action';
import { EmployeeService } from 'src/app/services/data.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  totalItems: number = 0;
  pageIndex: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5];

  city: any;
  department: any;

  constructor(private store: Store, private service: EmployeeService) { }

  ngOnInit(): void {
    this.store.select(selectCount).subscribe(x => {
      this.totalItems = x;
    })
    this.store.select(selectPage).subscribe(x => {
      this.pageIndex = x - 1;
    })

  }

  onChange(event: PageEvent) {

    // Implement City
    this.service.getCity().subscribe(x =>
      this.city = x
    )
    // Implement Department
    this.service.getDepartment().subscribe(x => {
      this.department = x;
    })

    if (this.city && this.department) {
      this.store.dispatch(getEmployees({ page: event.pageIndex + 1, city: this.city, department: this.department }))
    } else if (this.city) {
      this.store.dispatch(getEmployees({ page: event.pageIndex + 1, city: this.city }));
    } else if (this.department) {
      this.store.dispatch(getEmployees({ page: event.pageIndex + 1, department: this.department }));
    }
    this.store.dispatch(getEmployees({ page: event.pageIndex + 1 }))
    console.log(event.pageIndex + 1)
  }
}
