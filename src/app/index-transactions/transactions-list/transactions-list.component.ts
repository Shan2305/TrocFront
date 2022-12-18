import {Component, OnInit} from '@angular/core';
import {DtoInputTransactions} from "../dto/DtoInputTransactions";
import {TransactionsService} from "../transactions.service";


@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: DtoInputTransactions[] = [];
  transactionsOffer: DtoInputTransactions[] = [];



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

    this._transactionService
      .fetchByIdUserOffer()
      .subscribe(transaction=>this.transactionsOffer = transaction)
  }

}
