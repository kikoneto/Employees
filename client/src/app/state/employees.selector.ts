import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employees.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

export const selectEmployees = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.employees
);