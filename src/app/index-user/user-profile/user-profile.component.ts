import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: DtoInputUser | null = null;

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.fetchByIdToken();
  }

  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user =>this.user = user);

  }

}
