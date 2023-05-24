import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducer';

export const selectAccessTokenState = createFeatureSelector<UserState>('accessToken');

export const selectAccessToken = createSelector(
    selectAccessTokenState,
    (state: UserState) => state.accessToken
);

export const selectError = createSelector(
    selectAccessTokenState,
    (state: UserState) => state.error
)