import { Component, OnInit } from '@angular/core';
import {DtoInputArticle} from "./dto/dtoInputArticle";
import {UserService} from "../index-user/user.service";
import {ArticlesService} from "./articles.service";

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

}
