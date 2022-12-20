import {Component, EventEmitter, OnInit} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {UserService} from "../user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticlesService} from "../../index-articles/articles.service";
import {DtoCreateArticle} from "../../index-articles/dto/dto-create-article";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: DtoInputUser | null = null;
  userUpdate: DtoInputUser | null = null;

  form: FormGroup = this.fb.group({
    name: this.fb.control("", Validators.required),
    email: this.fb.control("", Validators.required),
    localite: this.fb.control("", Validators.required)
  });


  constructor(private fb: FormBuilder, private _userService: UserService,
              private _articleService: ArticlesService) {
  }

  ngOnInit(): void {
    this.fetchByIdToken();
  }

  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user => {
        this.user = user
      });

  }

  Update() {

    this.userUpdate = {
      id: this.user?.id,
      email: this.form.value.email,
      localite: this.form.value.localite,
      pseudo: this.form.value.name,
      admin: this.user?.admin
    }
    return this._userService.update(this.form.value.email, this.form.value.name, this.form.value.localite, this.user?.id).subscribe();

  }
}
