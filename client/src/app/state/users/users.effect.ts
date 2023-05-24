import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import * as UsersAction from './users.action';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    // Set the access token by login
    setAccessTokenByLogin = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersAction.setAccessTokenByLogin),
            exhaustMap(({ email, password }) =>
                this.authService.login({ email: email, password: password }).pipe(
                    map(accessToken => UsersAction.setAccessTokenByLoginSuccess({ accessToken })),
                    catchError(error => of(UsersAction.setAccessTokenByLoginFailure({ error: error.error.message })))
                )
            )
        )
    )

    // Set access token by register
    setAccessTokenByRegister = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersAction.setAccessTokenByRegister),
            exhaustMap(({ username, password, confirmPassword, email }) =>
                this.authService.register({ username: username, password: password, confirmPassword: confirmPassword, email: email }).pipe(
                    map(accessToken => UsersAction.setAccessTokenByRegisterSuccess({ accessToken })),
                    catchError(error => of(UsersAction.setAccessTokenByRegisterFailure({ error: error.error.message })))
                )
            )
        )
    )

    // Get Access Token
    getAccessToken = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersAction.getAccessToken),
            exhaustMap(() =>
                this.authService.getAccessToken().pipe(
                    map(accessToken => UsersAction.setAccessTokenByRegisterSuccess({ accessToken })),
                    catchError(error => of(UsersAction.setAccessTokenByRegisterFailure({ error: error.error.message })))
                )
            )
        )
    )
}