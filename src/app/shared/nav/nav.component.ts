import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public userName: string;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let currentUrl = window.location.href.toLowerCase();
    
    if(!currentUrl.includes("inventory")){
      this._userService.userName.subscribe(name => this.userName = name);

      if(this._authService.isAuthenticated()) {
        //TODO: not being found on first login
        var user = this._authService.getUserInfo();
        this.userName = user.first_name;
      }else {
        this._router.navigateByUrl('/login');
      }
    }
  }

  logout(): void {
    this._authService.logout()
    this._router.navigateByUrl('/login');
  }
}
