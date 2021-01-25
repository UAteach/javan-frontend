import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { AuthToken, UserDTO } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userName = new Subject<string>();

  private static readonly APIPATHPREFIX: string = 'core/';

  constructor(private _api: ApiService) { }

  getCurrentUser(): Observable<UserDTO> {
    return this._api.get<UserDTO>(UserService.APIPATHPREFIX + "current_user/");
  }

  getUserToken(UserLogin): Observable<AuthToken> {
    return this._api.post<AuthToken>("token-auth/", UserLogin);
  }

  authenticateUser(UserLogin): Observable<boolean>{
    var result = new Subject<boolean>();

    this.getUserToken(UserLogin).subscribe(response => {
      localStorage.setItem('token', response.token);

      this.getCurrentUser().subscribe(user => {
        localStorage.setItem('userInfo', JSON.stringify(user));
        this.userName.next(user.first_name);
        result.next(true);
      })

    }, error => {
      this.userName.next('Login');
      result.next(false);

    })
  
    return result.asObservable();

  }
}
