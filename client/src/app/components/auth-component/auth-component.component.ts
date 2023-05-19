import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-auth-component',
    templateUrl: './auth-component.component.html',
    styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent {

    constructor(private router: Router, private authService: AuthService) { };

    usernameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
    passwordControl = new FormControl('', [Validators.minLength(4), Validators.required]);


    onSubmit() {
        if (this.usernameControl.invalid || this.passwordControl.invalid) {
            console.log('invalid');
        } else {
            const credentials = {
                username: this.usernameControl.value,
                password: this.passwordControl.value,
            }

            this.authService.login(credentials).subscribe(result => {
                this.authService.setAccessToken(result.access_token);
            });

        }
    }

    getErrorMessage(control: FormControl) {
        if (control.hasError('required')) {
            return 'You must enter a value';
        }
        else if (control.hasError('minlength')) {
            return 'At least 4 char';
        }
        return '';
    }
}
