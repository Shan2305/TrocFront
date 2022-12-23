import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {ArticlesService} from "../../index-articles/articles.service";
import {UserService} from "../user.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users:DtoInputUser[] = [];

  userConnected : DtoInputUser | null = null;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.fetchAll();
    this.fetchByIdToken();
  }

  private fetchAll() {
    this._userService
      .fetchAll()
      .subscribe(users => this.users = users);
  }
  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user => {
        this.userConnected = user,
          console.log(this.userConnected)
      });

  }




}
