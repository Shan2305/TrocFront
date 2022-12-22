import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css']
})
export class AuthentificationFormComponent implements OnInit {

  token: string | null = null;

  error: boolean = false;

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
    try {
      this._authentificationService
        .login(this.form.value.email, this.form.value.mdp)
        .subscribe(response => {
          this.router.navigate(['/profile']);
        })
      this.error = true;
    } catch (error) {
      console.error("ca marche po");
    }


  }


}
