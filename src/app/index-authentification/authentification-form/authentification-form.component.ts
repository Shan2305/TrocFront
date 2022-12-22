import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {IndexBarreNavComponent} from "../../index-barre-nav/index-barre-nav.component";


@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css']
})
export class AuthentificationFormComponent implements OnInit {

  token: string | null = null;

  error: boolean = false;

  @ViewChild(IndexBarreNavComponent) barreNav: IndexBarreNavComponent | undefined;

  form: FormGroup = this.fb.group({
    email: this.fb.control("", Validators.required),
    mdp: this.fb.control("", Validators.required)
  });


  constructor(private fb: FormBuilder,
              private _authentificationService: AuthentificationService,
              private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  login() {

    this._authentificationService
      .login(this.form.value.email, this.form.value.mdp)
      .subscribe(response => {
        this.router.navigate(['/profile'])
      })
    this.error = true;
  }


}



