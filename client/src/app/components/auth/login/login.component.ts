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

    usernameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
    passwordControl = new FormControl('', [Validators.minLength(4), Validators.required]);


    onSubmit() {
        if (this.usernameControl.invalid || this.passwordControl.invalid) {
            console.log(this.passwordControl.errors)
        } else {
            const credentials = {
                username: this.usernameControl.value,
                password: this.passwordControl.value,
            }

            this.authService.login(credentials).subscribe(
                result => {
                    this.authService.setAccessToken(result.access_token);
                    this.router.navigate(['/list']);
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
        }
        else if (control.hasError('minlength')) {
            return 'At least 4 char';
        }
        else if (control.hasError('incorrect')) {
            return 'Incorrect Login information!';
        } else {
            return '';
        }
    }
}
