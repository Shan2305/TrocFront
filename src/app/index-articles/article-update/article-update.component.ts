import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {DtoInputArticle} from "../dto/dtoInputArticle";
import {UserService} from "../../index-user/user.service";
import {ArticlesService} from "../articles.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoUpdateArticle} from "../dto/DtoUpdateArticle";
import {HttpErrorResponse} from "@angular/common/http";

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
  error: boolean = false;
  errorMsg: string = "";

  constructor(private _userService: UserService,
              private _articleService: ArticlesService,
              private _route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

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

    if (confirm("Voulez-vous vraiment modifier cet article ?")) {
      this.error = true;
      return this._articleService.update(this.form.value.name, this.form.value.description, this.form.value.url, this.article?.id)
        .subscribe(response => {
            this.router.navigate(['/profile']);
          },
          (error: HttpErrorResponse) => {
            this.errorMsg = "Vous n'avez rien modifié";
          })
    }
    return null;
  }

  delete() {
    if (confirm("Voulez-vous vraimer supprimer cet article ?"))
    {
      return this._articleService
        .delete(this.article?.id)
        .subscribe(response =>this.router.navigate(['profile']));
    }
    return null;
  }
}
