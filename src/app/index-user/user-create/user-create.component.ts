import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoCreateUser} from "../dto/dto-create-user";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  private Validators: any;

  form : FormGroup = this.fb.group({
    email: this.fb.control("", Validators.required),
    pseudo: this.fb.control("", Validators.required),
    localite: this.fb.control("", Validators.required),
    mdp: this.fb.control("", Validators.required)
  });
  @Output()
  userCreated  :EventEmitter<DtoCreateUser> = new EventEmitter<DtoCreateUser>();

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  sendUser() {
    this.userCreated.next({
      email: this.form.value.email,
      pseudo: this.form.value.pseudo,
      localite: this.form.value.localite,
      mdp: this.form.value.mdp,
      admin : false
    })
  }
}
