import {Component, OnInit} from '@angular/core';
import {DtoInputTransactions} from "../dto/DtoInputTransactions";
import {TransactionsService} from "../transactions.service";
import {DtoInputUser} from "../../index-user/dto/dto-input-user";
import {UserService} from "../../index-user/user.service";
import {DtoInputArticle} from "../../index-articles/dto/dtoInputArticle";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: DtoInputTransactions[] = [];



  constructor(private _transactionService: TransactionsService) {
  }

  ngOnInit(): void {
    this.fetchByIdUser();
  }

  fetchByIdUser() {
    this._transactionService
      .fetchByIdUser()
      .subscribe(transaction => {
        this.transactions = transaction
      });
  }

}
