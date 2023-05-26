import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { EmployeeService } from '../../services/data.service';
import * as EmployeeActions from './employees.action';

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
    ) { }

    getEmployees = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.getEmployees),
            exhaustMap(({ page, limit, city, department }) =>
                this.employeeService.getEmployees(page, limit, city, department).pipe(
                    map((x) => EmployeeActions.getEmployeesSuccess({ employees: x.data, count: x.count, page: x.page })),
                    catchError(error => of(EmployeeActions.getEmployeesFailure({ error: error.message })))
                )
            )
        )
    );

    addEmployee = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.addEmployee),
            exhaustMap(({ employee }) =>
                this.employeeService.addEmployee(employee).pipe(
                    map(employees => EmployeeActions.addEmployeeSuccess(employees)),
                    catchError(error => of(EmployeeActions.addEmployeeFailure({ error: error.message })))
                )
            )
        )
    )

    deleteEmployee = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.deleteEmployee),
            exhaustMap(({ id }) =>
                this.employeeService.removeEmployee(id).pipe(
                    map(employees => EmployeeActions.deleteEmployeeSuccess({ employees })),
                    catchError(error => of(EmployeeActions.deleteEmployeeFailure({ error: error.message })))
                )
            ))
    )

    getCities = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.getCities),
            exhaustMap(() =>
                this.employeeService.getCities().pipe(
                    map(cities => EmployeeActions.getCitiesSuccess({ cities })),
                    catchError(error => of(EmployeeActions.getEmployeesFailure({ error: error.message })))
                )
            )
        )
    );

    getDepartments = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.getDepartments),
            exhaustMap(() =>
                this.employeeService.getDepartments().pipe(
                    map(departments => EmployeeActions.getDepartmentsSuccess({ departments })),
                    catchError(error => of(EmployeeActions.getDepartmentsFailure({ error: error.message })))
                )
            )
        )
    )
}