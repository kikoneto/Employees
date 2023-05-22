import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const getEmployees = createAction('[Employee] Get Employees');
export const getEmployeesSuccess = createAction('[Employee] Get Employees Success', props<{ employees: Employee[] }>());
export const getEmployeesFailure = createAction('[Employee] Get Employees Failure', props<{ error: string }>());

export const getEmployeesByCity = createAction('[Employee] Get Employees By City', props<{ city: string }>());
export const getEmployeesByCitySuccess = createAction('[Employee] Get Employees By City Success', props<{ employees: Employee[] }>());
export const getEmployeesByCityFailure = createAction('[Employee] Get Employees By City Failure', props<{ error: string }>());

export const getEmployeesByDepartment = createAction('[Employee] Get Employees By Department', props<{ department: string }>());
export const getEmployeesByDepartmentSuccess = createAction('[Employee] Get Employees By Department Success', props<{ employees: Employee[] }>());
export const getEmployeesByDepartmentFailure = createAction('[Employee] Get Employees By Department Failure', props<{ error: string }>());

export const changePage = createAction(
    '[Pagination] Change Page',
    props<{ currentPage: number }>()
);

export const updatePageSize = createAction(
    '[Pagination] Update Page Size',
    props<{ pageSize: number }>()
);

export const setTotalItems = createAction(
    '[Pagination] Set Total Items',
    props<{ totalItems: number }>()
);

export const setOriginalArray = createAction(
    '[Pagination] Set Original Array',
    props<{ employees: Employee[] }>()
);

export const getEmployeesByPage = createAction('[EmployeePage] Get Employees By Page', props<{ page: number, pageSize: number }>());
export const getEmployeesByPageSuccess = createAction('[EmployeePage] Get Employees By Page Success', props<{ employees: Employee[] }>());
export const getEmployeesByPageFailure = createAction('[EmployeePage] Get Employees By Page Failure', props<{ error: string }>());

export const addEmployee = createAction('[Employee] Add Employee', props<{ employee: Employee }>());
export const addEmployeeSuccess = createAction('[Employee] Add Employee Success', props<{ employee: Employee }>());
export const addEmployeeFailure = createAction('[Employee] Add Employee Failure', props<{ error: string }>());

export const deleteEmployee = createAction('[Employee] Delete Employee', props<{ id: number }>());
export const deleteEmployeeSuccess = createAction('[Employee] Delete Employee Success', props<{ id: number }>());
export const deleteEmployeeFailure = createAction('[Employee] Delete Employee Failure', props<{ error: string }>());

export const getCities = createAction('[City] Get Cities');
export const getCitiesSuccess = createAction('[City] Get Cities Success', props<{ cities: string[] }>());
export const getCitiesFailure = createAction('[City] Get Cities Failure', props<{ error: string }>());

export const getDepartments = createAction('[Department] Get Departments');
export const getDepartmentsSuccess = createAction('[Department] Get Departments Success', props<{ departments: string[] }>());
export const getDepartmentsFailure = createAction('[Department] Get Departments Failure', props<{ error: string }>());