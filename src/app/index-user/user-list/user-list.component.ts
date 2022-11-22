import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users:DtoInputUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }




}
