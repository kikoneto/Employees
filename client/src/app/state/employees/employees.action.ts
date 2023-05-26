import { createAction, props } from '@ngrx/store';
import { Employee } from '../../models/employee.model';

// Employees Get Actions
export const getEmployees = createAction('[Employee] Get Employees', props<{ page?: number, limit?: number, city?: string, department?: string }>());
export const getEmployeesSuccess = createAction('[Employee] Get Employees Success', props<{ employees: Employee[], count: number, page: number }>());
export const getEmployeesFailure = createAction('[Employee] Get Employees Failure', props<{ error: string }>());

// Employees Add Actions
export const addEmployee = createAction('[Employee] Add Employee', props<{ employee: Employee }>());
export const addEmployeeSuccess = createAction('[Employee] Add Employee Success', props<{ employee: Employee }>());
export const addEmployeeFailure = createAction('[Employee] Add Employee Failure', props<{ error: string }>());

// Employees Deletion Actions
export const deleteEmployee = createAction('[Employee] Delete Employee', props<{ id: number }>());
export const deleteEmployeeSuccess = createAction('[Employee] Delete Employee Success', props<{ employees: Employee[] }>());
export const deleteEmployeeFailure = createAction('[Employee] Delete Employee Failure', props<{ error: string }>());

// Get All The Cities Actions
export const getCities = createAction('[City] Get Cities');
export const getCitiesSuccess = createAction('[City] Get Cities Success', props<{ cities: string[] }>());
export const getCitiesFailure = createAction('[City] Get Cities Failure', props<{ error: string }>());

// Get All The Department Actions
export const getDepartments = createAction('[Department] Get Departments');
export const getDepartmentsSuccess = createAction('[Department] Get Departments Success', props<{ departments: string[] }>());
export const getDepartmentsFailure = createAction('[Department] Get Departments Failure', props<{ error: string }>());