import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
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
            exhaustMap(() =>
                this.employeeService.getEmployees().pipe(
                    map(employees => EmployeeActions.getEmployeesSuccess({ employees })),
                    catchError(error => of(EmployeeActions.getEmployeesFailure({ error: error.message })))
                )
            )
        )
    );

    loadEmployeesByCity = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.getEmployeesByCity),
            exhaustMap(({ city }) =>
                this.employeeService.getByCity(city).pipe(
                    map(employees => EmployeeActions.getEmployeesByCitySuccess({ employees })),
                    catchError(error => of(EmployeeActions.getEmployeesByCityFailure({ error: error.message })))
                )
            )
        )
    )

    loadEmployeesByDepartment = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.getEmployeesByDepartment),
            exhaustMap(({ department }) =>
                this.employeeService.getByDepartments(department).pipe(
                    map(employees => EmployeeActions.getEmployeesByDepartmentSuccess({ employees })),
                    catchError(error => of(EmployeeActions.getEmployeesByDepartmentFailure({ error: error.message })))
                )
            )
        )
    )

    loadEmployeesByPage = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.getEmployeesByPage),
            exhaustMap(({ page, pageSize }) =>
                this.employeeService.getByPage(page, pageSize).pipe(
                    map(employees => EmployeeActions.getEmployeesByPageSuccess({ employees })),
                    catchError(error => of(EmployeeActions.getEmployeesByPageFailure({ error: error.message })))
                )
            )
        )
    )

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