import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as bcrypt from "bcryptjs";

import { setAccessTokenByLogin } from 'src/app/state/users/users.action';
import { selectError } from 'src/app/state/users/users.selector';


@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error: string | null = null;

    constructor(private store: Store) { };

    ngOnInit(): void {
        this.store.select(selectError).subscribe(x => {
            this.error = x;
        })
    }

    emailControl = new FormControl('', [Validators.email, Validators.required]);
    passwordControl = new FormControl('', [Validators.minLength(4), Validators.required]);

    onSubmit() {
        if (this.emailControl.invalid || this.passwordControl.invalid) {
            console.log(this.passwordControl.errors)
        } else {
            if (this.passwordControl.value) {
                const saltRounds = 10;
                const hashedPassword = bcrypt.hashSync(this.passwordControl.value, saltRounds);
                console.log(hashedPassword);
                if (hashedPassword) {
                    this.store.dispatch(setAccessTokenByLogin({ email: this.emailControl.value as string, hashedPassword: hashedPassword }))
                }
            }

            // this.authService.login(credentials).subscribe(
            //     result => {
            //         localStorage.setItem('access_token', result.access_token)
            //         this.router.navigate(['/list']);
            //         this.loginGood = false;
            //     },
            //     error => {
            //         console.log('Error:', error);
            //         this.loginGood = true;
            //     }
            // );
        }
    }

    hashPassowrd(): any {
    }

    getErrorMessage(control: FormControl) {
        if (control.hasError('required')) {
            return 'You must enter a value';
        } else if (control.hasError('minlength')) {
            return 'At least 4 char';
        } else if (control.hasError('email')) {
            return 'Not valid Email Format';
        } else {
            return '';
        }
    }
}
