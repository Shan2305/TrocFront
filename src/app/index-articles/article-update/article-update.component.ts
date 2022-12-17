import { Component, OnInit } from '@angular/core';
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {DtoInputArticle} from "../dto/dtoInputArticle";
import {UserService} from "../../index-user/user.service";
import {ArticlesService} from "../articles.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoUpdateArticle} from "../dto/DtoUpdateArticle";

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  user: DtoInputUser | null = null;
  article: DtoInputArticle | null = null;
  articleUpdate: DtoUpdateArticle | null = null;
  idUser: number = 0;

  form: FormGroup = this.fb.group({
    name: this.fb.control("", Validators.required),
    description: this.fb.control("", Validators.required),
    url: this.fb.control("", Validators.required)
  });

  constructor(private _userService: UserService,
              private _articleService : ArticlesService,
              private _route :ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(args => {
      if (args.has("id")) {
        const id = Number(args.get("id"));
        this.fetchArticleById(id);
      }
    });
  }

  private fetchArticleById(id: number) {
    this._articleService
      .fetchById(id)
      .subscribe(article => {
        this.article = article,
          this.fetchUserById(this.idUser),
          console.log(this.idUser),
          console.log(this.article)
      });
  }

  private fetchUserById(id: number) {
    this._userService
      .fetchById(id)
      .subscribe(user => {
        this.user = user,
          console.log(this.user)
      });
  }


  Update() {
    return this._articleService.update(this.form.value.name, this.form.value.description, this.form.value.url, this.article?.id).subscribe();
  }
}