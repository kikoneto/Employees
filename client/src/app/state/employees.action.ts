import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const getEmployees = createAction('[Employee] Get Employees');
export const getEmployeesSuccess = createAction('[Employee] Get Employees Success', props<{ employees: Employee[] }>());
export const getEmployeesFailure = createAction('[Employee] Get Employees Failure', props<{ error: string }>());

export const addEmployee = createAction('[Employee] Add Employee', props<{ employee: Employee }>());
export const addEmployeeSuccess = createAction('[Employee] Add Employee Success', props<{ employee: Employee }>());
export const addEmployeeFailure = createAction('[Employee] Add Employee Failure', props<{ error: string }>());

export const deleteEmployee = createAction('[Employee] Delete Employee', props<{ id: number }>());
export const deleteEmployeeSuccess = createAction('[Employee] Delete Employee Success', props<{ id: number }>());
export const deleteEmployeeFailure = createAction('[Employee] Delete Employee Failure', props<{ error: string }>());