import { Component, OnInit } from '@angular/core';
import {UserService} from "../index-user/user.service";
import {DtoInputUser} from "../index-user/dto/dto-input-user";

@Component({
  selector: 'app-index-barre-nav',
  templateUrl: './index-barre-nav.component.html',
  styleUrls: ['./index-barre-nav.component.css']
})
export class IndexBarreNavComponent implements OnInit {

  user: DtoInputUser | null = null;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.fetchByIdToken();
  }
  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user =>this.user = user);

  }

  logOut() {
      this._userService
        .disconnect()
        .subscribe();

  }
}
