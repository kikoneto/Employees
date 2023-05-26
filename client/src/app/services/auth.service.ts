import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable, of, tap } from "rxjs";

@Injectable()
export class AuthService {
    private userSubject: BehaviorSubject<{ email: string | null, password: string | null, accessToken: string } | null> =
        new BehaviorSubject<{ email: string | null, password: string | null, accessToken: string } | null>(null);

    constructor(private http: HttpClient, private router: Router) { }

    getAccessToken(): Observable<string> {
        return of(localStorage.getItem('access_token') as string);
    }

    refreshToken(): Observable<any> {
        // Make the request without the access token
        const currentUser = this.userSubject.value;
        console.log(currentUser)
        return this.http.post(`http://localhost:3000/auth/login`, { email: currentUser?.email, password: currentUser?.password }).pipe(
            tap((response: any) => {
                // Extract and store the access token from the response
                const newUser = {
                    email: currentUser!.email,
                    password: currentUser!.password,
                    accessToken: response.access_token
                }
                console.log(newUser)
            })
        );
    }

    login(credentials: { email: string | null, hashedPassword: string | null }): Observable<any> {
        // Make the request without the access token
        return this.http.post(`http://localhost:3000/auth/login`, credentials).pipe(
            tap((response: any) => {
                localStorage.setItem('access_token', response.access_token);
                this.router.navigate([''])
            })
        );
    }

    register(credentials: { username: string, password: string, confirmPassword: string, email: string }): Observable<any> {
        return this.http.post(`http://localhost:3000/auth/register`, credentials).pipe(
            tap((response: any) => {
                localStorage.setItem('access_token', response.access_token);
                this.router.navigate([''])
            })
        );
    }

    getUser(): Observable<any> {
        return this.http.get(`http://localhost:3000/auth/profile`).pipe(
            tap((response: any) => {
                console.log(response)
                this.router.navigate([''])
            })
        );
    }
}