import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html'
})

export class SigninScreenComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      const user = new User(email, password);

      this.authService.signIn(user).subscribe(
        response => {
          this.authService.login(response);
        },
        err => {
          console.error(err);
        }
      );


    }
  }

}
