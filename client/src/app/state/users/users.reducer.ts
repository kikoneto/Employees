import { createReducer, on } from "@ngrx/store";
import * as UsersAction from '../users/users.action';

// States
export interface UserState {
    accessToken: string | null,
    error: string | null;
}

// Initial States
export const initialUserState: UserState = {
    accessToken: null,
    error: null
}

// Reducers
export const accessTokenReducer = createReducer(
    initialUserState,
    // Set the Token By Login
    on(UsersAction.setAccessTokenByLoginSuccess, (state, { accessToken }) => ({
        ...state,
        accessToken: accessToken,
        error: null,
    })),
    on(UsersAction.setAccessTokenByLoginFailure, (state, { error }) => ({
        ...state,
        error
    })),

    // Set the Token By Register
    on(UsersAction.setAccessTokenByRegisterSuccess, (state, { accessToken }) => ({
        ...state,
        accessToken: accessToken,
        error: null,
    })),
    on(UsersAction.setAccessTokenByRegisterFailure, (state, { error }) => ({
        ...state,
        error
    })),

    // Get the Token
    on(UsersAction.getAccessTokenSuccess, (state, { accessToken }) => ({
        ...state,
        accessToken: accessToken,
        error: null,
    })),
    on(UsersAction.getAccessTokenFailure, (state, { error }) => ({
        ...state,
        error
    })),
    // Remove The Token
    on(UsersAction.removeAccessTokenSuccess, (state) => ({
        ...state,
        accessToken: null,
        error: null,
    })),
)

