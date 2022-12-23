import { Component, OnInit } from '@angular/core';
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {UserService} from "../../index-user/user.service";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
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

  setAdmin(admin :boolean, id:number | undefined, pseudo:string) {
    if (confirm("Voulez-vous vraiment changer le role de "+pseudo+" ?"))
    {
      this._userService
        .setAdmin(admin,id)
        .subscribe();

      location.reload();
    }
  }

  deleteUser(id: number | undefined, pseudo: string) {
    if (confirm("Voulez-vous vraiment supprimer l'utilisateur "+pseudo+" ?"))
    {
      if (confirm("Tous ses articles seront également supprimé, êtes-vous sur ?"))
      {
        this._userService
          .deleteUser(id)
          .subscribe();
      }
    }


  }
}
