import { createReducer, on } from "@ngrx/store";
import { Employee } from "../models/employee.model";
import * as EmployeeAction from './employees.action';

export interface EmployeeState {
    employees: Employee[],
    error: string | null;
}

export const initialEmployeeState: EmployeeState = {
    employees: [],
    error: null
};

export const employeeReducer = createReducer(
    initialEmployeeState,
    on(EmployeeAction.getEmployeesSuccess, (state, { employees }) => ({
        ...state,
        employees: [...employees],
        error: null,
    })),
    on(EmployeeAction.getEmployeesFailure, (state, { error }) => ({
        ...state,
        error
    }))
)