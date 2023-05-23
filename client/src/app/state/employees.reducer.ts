import { createReducer, on } from "@ngrx/store";
import { Employee } from "../models/employee.model";
import * as EmployeeAction from './employees.action';

// States
export interface EmployeeState {
    employees: Employee[],
    employeesByPage: Employee[],
    error: string | null;
}

export interface PaginationState {
    totalItems: number;
    pageSize: number;
    currentPage: number;
    originalArray: Employee[];
}

export interface CityState {
    cities: string[],
    error: string | null;
}

export interface DepartmentState {
    departments: string[],
    error: string | null;
}

// Initial States
export const initialEmployeeState: EmployeeState = {
    employees: [],
    employeesByPage: [],
    error: null
};

export const initialPaginateState: PaginationState = {
    totalItems: 0,
    pageSize: 10,
    currentPage: 1,
    originalArray: []
}

export const initialCityState: CityState = {
    cities: [],
    error: null
};

export const initialDepartmentState: DepartmentState = {
    departments: [],
    error: null,
}

// Reducers
export const employeeReducer = createReducer(
    initialEmployeeState,
    // Getting Employees
    on(EmployeeAction.getEmployeesSuccess, (state, { employees }) => ({
        ...state,
        employees: [...employees],
        employeesByPage: [],
        error: null,
    })),
    on(EmployeeAction.getEmployeesFailure, (state, { error }) => ({
        ...state,
        error
    })),
    // Getting Employees By City
    on(EmployeeAction.getEmployeesByCitySuccess, (state, { employees }) => ({
        ...state,
        employees: [...employees],
        employeesByPage: [...employees],
        error: null,
    })),
    on(EmployeeAction.getEmployeesByCityFailure, (state, { error }) => ({
        ...state,
        error
    })),
    // Getting Employees By Department
    on(EmployeeAction.getEmployeesByDepartmentSuccess, (state, { employees }) => ({
        ...state,
        employees: [...employees],
        employeesByPage: [...employees],
        error: null,
    })),
    on(EmployeeAction.getEmployeesByDepartmentFailure, (state, { error }) => ({
        ...state,
        error
    })),
    // Getting Employees By Pages
    on(EmployeeAction.getEmployeesByPageSuccess, (state, { employees }) => ({
        ...state,
        employeesByPage: [...employees],
        error: null,
    })),
    on(EmployeeAction.getEmployeesByPageFailure, (state, { error }) => ({
        ...state,
        error
    })),
    // Deleting Employee By Id
    on(EmployeeAction.deleteEmployeeSuccess, (state, { employees }) => ({
        ...state,
        employees: [...employees],
        error: null,
    })),
    on(EmployeeAction.deleteEmployeeFailure, (state, { error }) => ({
        ...state,
        error,
    }))
)

export const paginateReducer = createReducer(
    initialPaginateState,
    on(EmployeeAction.setTotalItems, (state, { totalItems }) => ({
        ...state,
        totalItems: totalItems,
    })),
    on(EmployeeAction.changePage, (state, { currentPage }) => ({
        ...state,
        currentPage: currentPage,
    })),
    on(EmployeeAction.updatePageSize, (state, { pageSize }) => ({
        ...state,
        pageSize: pageSize,
    })),
    on(EmployeeAction.setOriginalArray, (state, { employees }) => ({
        ...state,
        originalArray: [...employees]
    }))
)

export const cityReducer = createReducer(
    initialCityState,
    on(EmployeeAction.getCitiesSuccess, (state, { cities }) => ({
        ...state,
        cities: [...cities],
        error: null,
    })),
    on(EmployeeAction.getCitiesFailure, (state, { error }) => ({
        ...state,
        error,
    })),
)

export const departmentReducer = createReducer(
    initialDepartmentState,
    on(EmployeeAction.getDepartmentsSuccess, (state, { departments }) => ({
        ...state,
        departments: [...departments],
        error: null,
    })),
    on(EmployeeAction.getDepartmentsFailure, (state, { error }) => ({
        ...state,
        error,
    })),
)