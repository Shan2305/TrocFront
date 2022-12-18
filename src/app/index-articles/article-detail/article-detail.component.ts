import {Component, Input, OnInit} from '@angular/core';
import {DtoInputArticle} from "../dto/dtoInputArticle";
import {ArticlesService} from "../articles.service";
import {ActivatedRoute} from "@angular/router";
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {UserService} from "../../index-user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionsService} from "../../index-transactions/transactions.service";
import {DtoInputTransactions} from "../../index-transactions/dto/DtoInputTransactions";
import {DtoCreateArticle} from "../dto/dto-create-article";
import {DtoCreateTransaction} from "../../index-transactions/dto/DtoCreateTransaction";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: DtoInputArticle | null = null;
  articles: DtoInputArticle[] | null = null;
  user: DtoInputUser | null = null;

  transaction :DtoCreateTransaction | null = null;
  userConnected: DtoInputUser | null = null;

  idUser: number = 0;
  form: FormGroup = this.fb.group({
    articleToTrade : this.fb.control("", Validators.required)
  });


  constructor(private _articleService: ArticlesService,
              private _route: ActivatedRoute,
              private _userService: UserService,
              private fb:FormBuilder,
              private _serviceTransaction : TransactionsService) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(args => {
      if (args.has("id")) {
        const id = Number(args.get("id"));
        this.fetchArticleById(id);
        this.fetchUserConnected();
        this.fetchAllArticleByUserConnected();
      }
    });
  }

  private fetchArticleById(id: number) {
    this._articleService
      .fetchById(id)
      .subscribe(article => {
        this.article = article,
          this.fetchUserById(this.article.idUser),
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

  private fetchUserConnected()
  {
    this._userService
      .fetchByIdToken()
      .subscribe(user =>this.userConnected = user);
  }

  private fetchAllArticleByUserConnected()
  {
      this._articleService
        .fetchAllArticleByUserIdConnected()
        .subscribe(article =>this.articles = article);
  }

  trade() {
    this.transaction = {
      id_User1 : this.userConnected?.id,
      id_User2 : this.article?.idUser,
      article1 : this.form.value.articleToTrade,
      article2: this.article?.id
    }

    this._serviceTransaction
      .create(this.transaction)
      .subscribe();

  }


}
