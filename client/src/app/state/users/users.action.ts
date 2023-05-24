import { createAction, props } from '@ngrx/store';

// Set the Access Token By Login
export const setAccessTokenByLogin = createAction('[User] Set Access Token By Login', props<{ email: string, hashedPassword: string }>());
export const setAccessTokenByLoginSuccess = createAction('[User] Set Access Token By Login Success', props<{ accessToken: string }>());
export const setAccessTokenByLoginFailure = createAction('[User] Set Access Token By Login Failure', props<{ error: string }>());

// Set the Access Token By Register
export const setAccessTokenByRegister = createAction('[User] Set Access Token By Register', props<{ username: string, password: string, confirmPassword: string, email: string }>());
export const setAccessTokenByRegisterSuccess = createAction('[User] Set Access By Register Token Success', props<{ accessToken: string }>());
export const setAccessTokenByRegisterFailure = createAction('[User] Set Access By Register Token Failure', props<{ error: string }>());

// Remove Access Token
export const removeAccessToken = createAction('[User] Remove Access Token From Local Storage');

// Get the Access Token
export const getAccessToken = createAction('[User] Get Access Token');
export const getAccessTokenSuccess = createAction('[User] Get Access Token Success', props<{ accessToken: string }>());
export const getAccessTokenFailure = createAction('[User] Get Access Token Failure', props<{ error: string }>());