import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as UsersAction from './users.action';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    // Set the access token by login
    setAccessTokenByLogin = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersAction.setAccessTokenByLogin),
            exhaustMap(({ email, hashedPassword }) =>
                this.authService.login({ email: email, hashedPassword: hashedPassword }).pipe(
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

    removeToken = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersAction.removeAccessToken),
            tap(() => {
                localStorage.removeItem('access_token');
                this.router.navigate([''])
            }),
            map(() => {
                return UsersAction.removeAccessTokenSuccess()
            })
        ),
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