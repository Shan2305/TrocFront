import {Component, OnInit} from '@angular/core';
import {DtoInputTransactions} from "../../index-transactions/dto/DtoInputTransactions";
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";
import {DtoInputTransactionHistoric} from "../dto/dtoInputTransactionHistoric";
import {TransactionsService} from "../../index-transactions/transactions.service";
import {UserService} from "../../index-user/user.service";
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../../index-articles/articles.service";
import {HistoricTransactionsService} from "../historic-transactions.service";
import {HistoricArticleService} from "../../index-historic-articles/historic-article.service";

@Component({
  selector: 'app-detail-historic-transactions',
  templateUrl: './detail-historic-transactions.component.html',
  styleUrls: ['./detail-historic-transactions.component.css']
})
export class DetailHistoricTransactionsComponent implements OnInit {

  //la transaction
  transaction: DtoInputTransactionHistoric | null = null;

  //l'utilisateur qui fait une demande
  requestingUser: DtoInputUser | null = null;

  //l'utilisateur possedant de l'article desiré
  UserArticleWanted: DtoInputUser | null = null;

  //l'offre de l'utilisateur qui fait la demande
  ArticleOffer: DtoInputArticle | null = null;

  //l'article désiré par l'utilisateur qui fait la demande
  ArticleWanted: DtoInputArticle | null = null;

  userConnected: DtoInputUser | null = null;

  constructor(private _transactionService: TransactionsService,
              private _userService: UserService,
              private _route: ActivatedRoute,
              private _articleService: ArticlesService,
              private _transactionHistoricService: HistoricTransactionsService,
              private _historicArticleService: HistoricArticleService) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(args => {
      if (args.has("id")) {
        const id = Number(args.get("id"));
        this.fetchTransactionById(id);
      }
    });
    this.fetchUserConnected();
  }

  private fetchUserByIdWanted(id: number) {
    this._userService
      .fetchById(id)
      .subscribe(user => {
        this.UserArticleWanted = user,
          console.log(this.UserArticleWanted),
          console.log(this.transaction?.id_User2)
      });
  }

  private fetchTransactionById(id: number) {
    this._transactionHistoricService
      .fetchById(id)
      .subscribe(transaction => {
        this.transaction = transaction,
          console.log(this.transaction),
          this.fetchUserById(this.transaction.id_User1),
          this.fetchOfferArticle(this.transaction.article1),
          this.fetchArticleWanted(this.transaction.article2),
          this.fetchUserByIdWanted(this.transaction.id_User2)
      });
  }

  private fetchUserById(id: number) {
    this._userService
      .fetchById(id)
      .subscribe(user => {
        this.requestingUser = user,
          console.log(this.requestingUser),
          console.log(this.transaction?.id_User1)
      });
  }

  private fetchUserConnected() {
    this._userService
      .fetchByIdToken()
      .subscribe(user => this.userConnected = user);
  }

  private fetchOfferArticle(id: number) {
    this._historicArticleService
      .fetchById(id)
      .subscribe(article => {
        this.ArticleOffer = article,
          console.log(this.ArticleOffer)
      })
  }

  private fetchArticleWanted(id: number) {
    this._historicArticleService
      .fetchById(id)
      .subscribe(article => {
        this.ArticleWanted = article,
          console.log(this.ArticleWanted)
      })
  }

}
