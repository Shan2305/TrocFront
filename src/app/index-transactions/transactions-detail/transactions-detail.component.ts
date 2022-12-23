import {Component, OnInit} from '@angular/core';
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";
import {TransactionsService} from "../transactions.service";
import {UserService} from "../../index-user/user.service";
import {DtoInputTransactions} from "../dto/DtoInputTransactions";
import {ActivatedRoute} from "@angular/router";
import {
  toR3NgModuleMeta
} from "@angular/compiler-cli/linker/src/file_linker/partial_linkers/partial_ng_module_linker_1";
import {ArticlesService} from "../../index-articles/articles.service";
import {HistoricTransactionsService} from "../../index-historic-transactions/historic-transactions.service";
import {HistoricArticleService} from "../../index-historic-articles/historic-article.service";

@Component({
  selector: 'app-transactions-detail',
  templateUrl: './transactions-detail.component.html',
  styleUrls: ['./transactions-detail.component.css']
})
export class TransactionsDetailComponent implements OnInit {

  //la transaction
  transaction: DtoInputTransactions | null = null;

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

  private fetchTransactionById(id: number) {
    this._transactionService
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

  private fetchUserByIdWanted(id: number) {
    this._userService
      .fetchById(id)
      .subscribe(user => {
        this.UserArticleWanted = user,
          console.log(this.UserArticleWanted),
          console.log(this.transaction?.id_User2)
      });
  }

  private fetchOfferArticle(id: number) {
    this._articleService
      .fetchById(id)
      .subscribe(article => {
        this.ArticleOffer = article,
          console.log(this.ArticleOffer)
      })
  }

  private fetchArticleWanted(id: number) {
    this._articleService
      .fetchById(id)
      .subscribe(article => {
        this.ArticleWanted = article,
          console.log(this.ArticleWanted)
      })
  }

  private fetchUserConnected() {
    this._userService
      .fetchByIdToken()
      .subscribe(user => this.userConnected = user);
  }

  accepter(accepter: boolean) {

    if (confirm()) {
      this._transactionHistoricService
        .AcceptTransaction(accepter, this.transaction?.id)
        .subscribe();

      if (accepter) {
        this._historicArticleService
          .ArchivedArticle(this.ArticleOffer?.id)
          .subscribe();

        this._historicArticleService
          .ArchivedArticle(this.ArticleWanted?.id)
          .subscribe();
      }
    }
  }
}
