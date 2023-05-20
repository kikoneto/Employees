import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CityState, DepartmentState, EmployeeState } from './employees.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');
export const selectCityState = createFeatureSelector<CityState>('city');
export const selectDepartmentState = createFeatureSelector<DepartmentState>('department');

export const selectEmployees = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.employees
);

export const selectCities = createSelector(
    selectCityState,
    (state: CityState) => state.cities
);

export const selectDeparments = createSelector(
    selectDepartmentState,
    (state: DepartmentState) => state.departments
);