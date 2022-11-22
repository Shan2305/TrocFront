import { Component, OnInit } from '@angular/core';
import {DtoInputUser} from "./dto/dto-input-user";
import {UserService} from "./user.service";
import {DtoCreateUser} from "./dto/dto-create-user";


@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {
  users:DtoInputUser[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.fetchAll();
  }


  private fetchAll() {
    this._userService
      .fetchAll()
      .subscribe(users => this.users = users);
  }

  create(dto: DtoCreateUser) {
    this._userService.create(dto).subscribe(user => this.users.push(user));
  }

}
