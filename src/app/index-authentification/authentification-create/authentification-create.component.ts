import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCreateUser} from "../../index-user/dto/dto-create-user";
import {UserService} from "../../index-user/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: 'app-authentification-create',
  templateUrl: './authentification-create.component.html',
  styleUrls: ['./authentification-create.component.css']
})
export class AuthentificationCreateComponent implements OnInit {

  userCreated: DtoCreateUser | null = null;

  msgErreur : String ="mm";

  form: FormGroup = this.fb.group({
    email: this.fb.control("", Validators.required),
    pseudo: this.fb.control("", Validators.required),
    localite: this.fb.control("", Validators.required),
    mdp: this.fb.control("", Validators.required)
  });
  error: boolean = false;

  constructor(private fb: FormBuilder,
              private _userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userCreated = {
      email: this.form.value.email,
      pseudo: this.form.value.pseudo,
      localite: this.form.value.localite,
      mdp: this.form.value.mdp,
      admin: false
    }

    this._userService
      .create(this.userCreated)
      .subscribe(response => {
        this.router.navigate(['/Connexion'])
      },
          (error: HttpErrorResponse) => {
          this.msgErreur = error.error.message;
            console.error(error);
          }
      )
    this.error=true;

  }
}
