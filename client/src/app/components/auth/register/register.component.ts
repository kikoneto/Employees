import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { setAccessTokenByRegister } from 'src/app/state/users/users.action';
import { selectError } from 'src/app/state/users/users.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string | null = null;
  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.select(selectError).subscribe(x => {
      this.error = x;
    })
  }

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

      if (credentials) {
        this.store.dispatch(setAccessTokenByRegister({ ...credentials }))
      }
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
