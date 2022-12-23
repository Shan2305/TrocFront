import {Component, OnInit} from '@angular/core';
import {DtoInputTransactions} from "../dto/DtoInputTransactions";
import {TransactionsService} from "../transactions.service";
import {DtoInputTransactionHistoric} from "../../index-historic-transactions/dto/dtoInputTransactionHistoric";
import {HistoricTransactionsService} from "../../index-historic-transactions/historic-transactions.service";


@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: DtoInputTransactions[] = [];
  transactionsOffer: DtoInputTransactions[] = [];

  HistoricTransactionsReceive: DtoInputTransactionHistoric[] = [];
  HistoricTransactionsOffer: DtoInputTransactionHistoric[] = [];


  constructor(private _transactionService: TransactionsService,
              private _transactionHistoricService : HistoricTransactionsService) {
  }

  ngOnInit(): void {
    this.fetchByIdUser();
    this.fetchByIdHistoric();
  }

  fetchByIdUser() {
    this._transactionService
      .fetchByIdUser()
      .subscribe(transaction => {
        this.transactions = transaction
      });

    this._transactionService
      .fetchByIdUserOffer()
      .subscribe(transaction => this.transactionsOffer = transaction)
  }

  fetchByIdHistoric()
  {
    //recupere dans l'historique de transactions, toutes les demandes de transactions fini
    this._transactionHistoricService
      .fetchByIdUser()
      .subscribe(transaction => this.HistoricTransactionsReceive = transaction);

    //recupere dans l'historique de transactions, toutes les offres de transactions fini
    this._transactionHistoricService
      .fetchByIdUserOffer()
      .subscribe(transaction => this.HistoricTransactionsOffer = transaction);

  }

}
