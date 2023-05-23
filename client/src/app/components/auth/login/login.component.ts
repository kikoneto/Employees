import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginGood: boolean = false;
    constructor(private router: Router, private authService: AuthService) { };

    emailControl = new FormControl('', [Validators.email, Validators.required]);
    passwordControl = new FormControl('', [Validators.minLength(4), Validators.required]);

    onSubmit() {
        if (this.emailControl.invalid || this.passwordControl.invalid) {
            console.log(this.passwordControl.errors)
        } else {
            const credentials = {
                email: this.emailControl.value,
                password: this.passwordControl.value,
            }

            this.authService.login(credentials).subscribe(
                result => {
                    localStorage.setItem('access_token', result.access_token)
                    this.router.navigate(['/list']);
                    this.loginGood = false;
                },
                error => {
                    console.log('Error:', error);
                    this.loginGood = true;
                }
            );
        }
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
