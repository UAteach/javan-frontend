import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../models';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide = true;
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let user = new UserLogin();
  }

  onSubmit() {
    console.log(this.loginForm)
    let authenticatingUser = new UserLogin()
    authenticatingUser = this.loginForm.value;

    this._userService.authenticateUser(authenticatingUser).subscribe(isSuccess => {
      if (isSuccess){
        this._router.navigateByUrl('/');
      }else {
        console.log("ERROR logging in")
        this.loginForm.clearValidators();
      }
    });

  }
}
