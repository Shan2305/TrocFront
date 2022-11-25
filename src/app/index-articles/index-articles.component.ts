import { Component, OnInit } from '@angular/core';
import {DtoInputArticle} from "./dto/dtoInputArticle";
import {UserService} from "../index-user/user.service";
import {ArticlesService} from "./articles.service";
import {DtoCreateUser} from "../index-user/dto/dto-create-user";
import {DtoCreateArticle} from "./dto/dto-create-article";

@Component({
  selector: 'app-index-articles',
  templateUrl: './index-articles.component.html',
  styleUrls: ['./index-articles.component.css']
})
export class IndexArticlesComponent implements OnInit {
  articles: DtoInputArticle[] = [];

  constructor(private _articleService: ArticlesService) { }

  ngOnInit(): void {
    this.fetchAll();
  }
  private fetchAll() {
    this._articleService
      .fetchAll()
      .subscribe(articles => this.articles = articles);
  }

  create(dto: DtoCreateArticle) {
    this._articleService.create(dto).subscribe(article => this.articles.push(article));
  }

}
