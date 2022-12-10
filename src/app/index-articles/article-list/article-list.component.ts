import {Component, Input, OnInit} from '@angular/core';
import {DtoInputArticle} from "../dto/dtoInputArticle";
import {DtoCreateArticle} from "../dto/dto-create-article";
import {ArticlesService} from "../articles.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input()

  articles:DtoInputArticle[] = [];

  constructor(private _articleService: ArticlesService) { }



  ngOnInit(): void {
  }

  affichage(name: String) {
    this._articleService.fetchByName(name).subscribe(article => this.articles = article);
  }

}
