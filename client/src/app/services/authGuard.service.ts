import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAccessToken } from '../state/users/users.selector';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    accessToken: string | null = null;
    constructor(private store: Store, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        this.store.select(selectAccessToken).subscribe(x => {
            this.accessToken = x;
        })

        if (this.accessToken) {
            // User is authenticated, allow access to the route
            if (state.url === '/login' || state.url === '/register') {
                this.router.navigate([''])
                return false;
            }
            return true;
        } else {
            // User is not authenticated, redirect to the login page
            if (state.url === '/login' || state.url === '/register') {
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        }
    }
}