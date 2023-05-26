import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CityState, DepartmentState, EmployeeState, PaginationState } from './employees.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employee');

export const selectPaginationState = createFeatureSelector<PaginationState>('pagination');

export const selectCityState = createFeatureSelector<CityState>('city');

export const selectDepartmentState = createFeatureSelector<DepartmentState>('department');


export const selectEmployees = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.employees
);

export const selectCount = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.count
)

export const selectPage = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.page
)

// Filter Selectors
export const selectCities = createSelector(
    selectCityState,
    (state: CityState) => state.cities
);

export const selectDeparments = createSelector(
    selectDepartmentState,
    (state: DepartmentState) => state.departments
);