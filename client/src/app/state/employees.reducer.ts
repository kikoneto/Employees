import { createReducer, on } from "@ngrx/store";
import { Employee } from "../models/employee.model";
import * as EmployeeAction from './employees.action';

// States
export interface EmployeeState {
    employees: Employee[],
    error: string | null;
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
    error: null
};

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
        error: null,
    })),
    on(EmployeeAction.getEmployeesByDepartmentFailure, (state, { error }) => ({
        ...state,
        error
    })),
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