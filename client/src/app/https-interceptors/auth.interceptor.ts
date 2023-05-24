import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectAccessToken } from '../state/users/users.selector';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  accessToken: string | null = null;
  constructor(private store: Store) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.store.select(selectAccessToken).subscribe(x => {
      this.accessToken = x;
    })

    if (this.accessToken) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.accessToken}`
        }
      });

      console.log('Request with Token');
      return next.handle(modifiedRequest).pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              // To Do: Implement Logic for refreshing token

              // this.authService.refreshToken().subscribe(x => {
              //   console.log('Try Again');
              // });
            }
          }
          return throwError(error);
        })
      );;
    } else {
      console.log('Request without Token');
      return next.handle(request)
    }
  }

}