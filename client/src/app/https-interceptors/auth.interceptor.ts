import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.accessToken$) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.accessToken$}`
        }
      });

      console.log('good with token')
      return next.handle(modifiedRequest).pipe(
        catchError((error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.authService.refreshToken().subscribe(x => {
                console.log('Try Again');
              });
            }
          }
          return throwError(error);
        })
      );;
    } else {
      console.log('good');
      return next.handle(request)
    }
  }

}