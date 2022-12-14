import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {UserService} from "../user.service";
import {DtoCreateArticle} from "../../index-articles/dto/dto-create-article";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";
import {ArticlesService} from "../../index-articles/articles.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../index-category/category.service";
import {DtoInputCategory} from "../../index-category/dto/dto-input-category";
import {AuthentificationService} from "../../index-authentification/authentification.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: DtoInputUser | null = null;
  articles: DtoInputArticle[] = [];
  categories: DtoInputCategory[] = [];

  articleCreated: DtoCreateArticle | null = null;

  form: FormGroup = this.fb.group({
    name: this.fb.control("", Validators.required),
    urlImage: this.fb.control("", Validators.required),
    description : this.fb.control("",Validators.required),
    combobox: this.fb.control("",Validators.required)
  });

  constructor(private _userService: UserService,
              private _articleService: ArticlesService,
              private fb: FormBuilder,
              private _categoryService: CategoryService,
              private _authentificationService : AuthentificationService) {
  }

  ngOnInit(): void {
    this.fetchByIdToken();
    this.fetchAllArticleByUserId();
    this.fetchAllCategorie();
  }

  sendArticle() {
    if (confirm("Voulez-vous vraiment ajouter cet article à votre profil ?"))
    {
      this.articleCreated =
        {
          name: this.form.value.name,
          urlImage: this.form.value.urlImage,
          nomCat: this.form.value.combobox,
          description: this.form.value.description
        }
      this.createArticle(this.articleCreated);
    }

  }

  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user => {
        this.user = user,
          console.log(this.user),
          this._authentificationService
            .setUserConnected(user);
      });

  }

  private fetchAllArticleByUserId() {
    this._articleService
      .fetchAllArticleByUserIdConnected()
      .subscribe(article => {
        this.articles = article
      });
  }

  createArticle(dto: DtoCreateArticle) {
    this._articleService.create(dto).subscribe(article => this.articles.push(article));
  }

  fetchAllCategorie() {
    this._categoryService.fetchAll()
      .subscribe(category => {
        this.categories = category,
          console.log(this.categories)
      });

  }
}
