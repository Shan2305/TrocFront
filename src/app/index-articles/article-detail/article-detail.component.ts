import {Component, Input, OnInit} from '@angular/core';
import {DtoInputArticle} from "../dto/dtoInputArticle";
import {ArticlesService} from "../articles.service";
import {ActivatedRoute} from "@angular/router";
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {UserService} from "../../index-user/user.service";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: DtoInputArticle | null = null;
  user: DtoInputUser | null = null;

  idUser: number = 0;

  constructor(private _articleService: ArticlesService,
              private _route: ActivatedRoute,
              private _userService: UserService) {
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
          this.idUser = article.idUser,
          this.fetchUserById(this.idUser),
          console.log(this.idUser,)
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

}
