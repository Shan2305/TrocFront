import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "../dto/dto-input-user";
import {UserService} from "../user.service";
import {DtoCreateArticle} from "../../index-articles/dto/dto-create-article";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";
import {ArticlesService} from "../../index-articles/articles.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: DtoInputUser | null = null;
  articles: DtoInputArticle[] = [];

  constructor(private _userService: UserService, private _articleService : ArticlesService) {

  }

  ngOnInit(): void {
    this.fetchByIdToken();
    this.fetchAllArticleByUserId();
  }

  fetchByIdToken() {
    return this._userService
      .fetchByIdToken()
      .subscribe(user =>this.user = user);

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
}
