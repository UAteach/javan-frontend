import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDTO } from '../models';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  constructor(
    private _jwtHelper: JwtHelperService,
  ) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getUserInfo(): UserDTO {
    if (this.isAuthenticated){
      return JSON.parse(localStorage.getItem('userInfo'));
    }else{
      return null;
    }
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !this._jwtHelper.isTokenExpired(token);
  }
  
  // see UserService for authenticating user (logging in)

  public logout(){
    // destroys local storage
    localStorage.clear();
  }

}