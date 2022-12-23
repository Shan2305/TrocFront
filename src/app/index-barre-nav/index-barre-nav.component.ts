import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserService} from "../index-user/user.service";
import {DtoInputUser} from "../index-user/dto/dto-input-user";
import {AuthentificationService} from "../index-authentification/authentification.service";

@Component({
  selector: 'app-index-barre-nav',
  templateUrl: './index-barre-nav.component.html',
  styleUrls: ['./index-barre-nav.component.css']
})
export class IndexBarreNavComponent implements OnInit {

  user: DtoInputUser | null = null;

  constructor(private _userService: UserService,
               public _authentificationService : AuthentificationService) {
  }

  ngOnInit(): void {
    this.fetchByIdToken();

  }

  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user => this.user = user);

  }

  logOut() {
    if (confirm("Etes-vous sur de vouloir vous déconnecter ?")) {
      this._userService
        .disconnect()
        .subscribe();
      this._authentificationService
        .deleteUserConnected();
    }
  }
}
