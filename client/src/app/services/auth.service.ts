import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable()
export class AuthService {
    private accessTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(''); // Initialize with null
    public accessToken$: string = '';

    private userSubject: BehaviorSubject<{ email: string | null, password: string | null, accessToken: string } | null> =
        new BehaviorSubject<{ email: string | null, password: string | null, accessToken: string } | null>(null);

    constructor(private http: HttpClient, private router: Router) { }

    setAccessToken(token: string) {
        this.accessTokenSubject.next(token);
        this.accessTokenSubject.subscribe(x => {
            this.accessToken$ = x;
        })
    }

    getAccessToken(): string | undefined {
        return this.accessToken$;
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
                this.setAccessToken(response.access_token);
                this.userSubject.next(newUser)
            })
        );
    }

    login(credentials: { email: string | null, password: string | null }): Observable<any> {
        // Make the request without the access token
        return this.http.post(`http://localhost:3000/auth/login`, credentials).pipe(
            tap((response: any) => {
                const newUser = {
                    email: credentials.email,
                    password: credentials.password,
                    accessToken: response.access_token
                }
                localStorage.setItem('access_token', response.access_token);
                // this.setAccessToken(response.access_token);
                // this.userSubject.next(newUser)
                // this.router.navigate(['/list'])
            })
        );
    }

    register(credentials: { username: string, password: string, confirmPassword: string, email: string }): Observable<any> {
        return this.http.post(`http://localhost:3000/auth/register`, credentials);
    }

    isAuthenticated(): boolean {
        if (this.userSubject.getValue() === null) {
            return false;
        } else {
            return true;
        }
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