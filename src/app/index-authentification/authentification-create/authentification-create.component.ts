import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCreateUser} from "../../index-user/dto/dto-create-user";
import {UserService} from "../../index-user/user.service";

@Component({
  selector: 'app-authentification-create',
  templateUrl: './authentification-create.component.html',
  styleUrls: ['./authentification-create.component.css']
})
export class AuthentificationCreateComponent implements OnInit {

  userCreated: DtoCreateUser | null = null;

  form: FormGroup = this.fb.group({
    email: this.fb.control("", Validators.required),
    pseudo: this.fb.control("", Validators.required),
    localite: this.fb.control("", Validators.required),
    mdp: this.fb.control("", Validators.required)
  });

  constructor(private fb: FormBuilder,
              private _userService: UserService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userCreated = {
      email: this.form.value.email,
      pseudo: this.form.value.pseudo,
      localite: this.form.value.localite,
      mdp: this.form.value.mdp,
      admin : false
    }

    this._userService
      .create(this.userCreated)
      .subscribe();


  }
}
