import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerState: string = '';
  constructor(private router: Router, private authService: AuthService) { };

  usernameControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  passwordControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  confirmPasswordControl = new FormControl('', [Validators.minLength(4), Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.required]);


  onSubmit() {
    if (this.usernameControl.invalid || this.passwordControl.invalid || this.confirmPasswordControl.invalid || this.emailControl.invalid) {
    } else {
      const credentials = {
        username: this.usernameControl.value as string,
        password: this.passwordControl.value as string,
        confirmPassword: this.confirmPasswordControl.value as string,
        email: this.emailControl.value as string
      }

      this.authService.register(credentials).subscribe(
        result => {
          this.registerState = 'Successful';
          localStorage.setItem('access_token', result.access_token)
          console.log(result.access_token)
        },
        error => {
          this.registerState = error.error.message
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
    else if (control.hasError('email')) {
      return 'Not a valid email';
    } else {
      return '';
    }
  }
}
