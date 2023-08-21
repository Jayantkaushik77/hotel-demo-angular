import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

import { FormsModule } from '@angular/forms';
import { LoginuserService } from '../loginuser.service';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'jsw-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private loginuserservice: LoginuserService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(
      (data) => {
        // (Response: any) => (window.location.href = '/rooms');
        alert('Login Successfully');
        this.navigateToRooms();

        // this.router.navigateByUrl('/test');
      },
      (error) => alert('sorry plz enter correct UserId and Password')
    );
  }

  navigateToRooms() {
    this._router.navigate(['rooms']);
  }
}
