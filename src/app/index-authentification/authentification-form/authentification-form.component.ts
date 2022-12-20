import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {DtoCreateArticle} from "../../index-articles/dto/dto-create-article";
import {DtoLogin} from "../dto/dto-login";
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css']
})
export class AuthentificationFormComponent implements OnInit {

  token: string | null = null;
  form: FormGroup = this.fb.group({
    email: this.fb.control("", Validators.required),
    mdp: this.fb.control("", Validators.required)
  });

  constructor(private fb: FormBuilder,
              private _authentificationService: AuthentificationService,
              private  router:Router) {
  }

  ngOnInit(): void {
  }
  login() {
    this._authentificationService
      .login(this.form.value.email, this.form.value.mdp)
      .subscribe();

    location.reload();
  }


}
