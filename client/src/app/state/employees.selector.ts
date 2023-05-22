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

// Pagination Selectors
export const selectTotalItems = createSelector(
    selectPaginationState,
    (state) => state.totalItems
);

export const selectCurrentPage = createSelector(
    selectPaginationState,
    (state) => state.currentPage
);

export const selectPageSize = createSelector(
    selectPaginationState,
    (state) => state.pageSize
);

export const selectOriginalArray = createSelector(
    selectPaginationState,
    (state: PaginationState) => state.originalArray
);

export const selectPaginatedArray = createSelector(
    selectCurrentPage,
    selectPageSize,
    selectOriginalArray,
    (currentPage: number, itemsPerPage: number, array: any[]) => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return array.slice(startIndex, endIndex);
    }
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