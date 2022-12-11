import {Component, Input, OnInit} from '@angular/core';
import {DtoInputArticle} from "../dto/dtoInputArticle";
import {DtoCreateArticle} from "../dto/dto-create-article";
import {ArticlesService} from "../articles.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoInputCategory} from "../../index-category/dto/dto-input-category";
import {CategoryService} from "../../index-category/category.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input()
  articles: DtoInputArticle[] = [];

  categories: DtoInputCategory[] = [];

  constructor(private _articleService: ArticlesService,
              private _categoryService: CategoryService) {
  }


  ngOnInit(): void {
    this.fetchAllCategorie();

  }

  affichage(name: String) {
    this._articleService.fetchByName(name)
      .subscribe(article => this.articles = article);
  }

  fetchAllCategorie() {
    this._categoryService.fetchAll()
      .subscribe(category => {
        this.categories = category,
          console.log(this.categories)
      });

  }

  filtreCategories(category: String) {
    this._articleService
      .fetchByNameCategory(category)
      .subscribe(article => {
        this.articles = article,
          console.log(this.articles)
      })


  }
}
