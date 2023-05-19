import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EmployeeService } from '../services/data.service';
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
            mergeMap(() =>
                this.employeeService.getEmployees().pipe(
                    map(employees => EmployeeActions.getEmployeesSuccess({ employees })),
                    catchError(error => of(EmployeeActions.getEmployeesFailure({ error: error.message })))
                )
            )
        )
    );

    addEmployee = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.addEmployee),
            mergeMap(({ employee }) =>
                this.employeeService.addEmployee(employee).pipe(
                    map(employees => EmployeeActions.addEmployeeSuccess(employees)),
                    catchError(error => of(EmployeeActions.addEmployeeFailure({ error: error.message })))
                )
            ))
    )

    deleteEmployee = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.deleteEmployee),
            mergeMap(({ id }) =>
                this.employeeService.removeEmployee(id).pipe(
                    map(employees => EmployeeActions.deleteEmployeeSuccess({ id })),
                    catchError(error => of(EmployeeActions.deleteEmployeeFailure({ error: error.message })))
                )
            ))
    )
}