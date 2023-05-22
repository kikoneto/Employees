import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { selectCurrentPage, selectPageSize, selectTotalItems } from 'src/app/state/employees.selector';
import { Store } from '@ngrx/store';
import { changePage, updatePageSize } from 'src/app/state/employees.action';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  totalItems: number = 0;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10];


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectCurrentPage).subscribe(x =>
      this.pageIndex = x);
    this.store.select(selectPageSize).subscribe(x =>
      this.pageSize = x);
    this.store.select(selectTotalItems).subscribe(x =>
      this.totalItems = x);
  }

  onChange(event: PageEvent) {
    this.store.dispatch(changePage({ currentPage: event.pageIndex }));
    if (event.pageSize !== this.pageSize) {
      this.store.dispatch(updatePageSize({ pageSize: event.pageSize }))
    }
    console.log(this.pageSize);
    console.log(this.pageIndex);
    console.log(this.totalItems);
  }
}
