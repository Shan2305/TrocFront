import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputTransactions} from "../index-transactions/dto/DtoInputTransactions";
import {DtoInputTransactionHistoric} from "./dto/dtoInputTransactionHistoric";

@Injectable({
  providedIn: 'root'
})
export class HistoricTransactionsService {

  private static readonly ENTRY_POINT = environment.ApiUrlHistoricTransactions
  constructor(private _httpClient : HttpClient) { }

  //https://localhost:7018/api/v1/HistoricTransaction?echange=true&idtransaction=2
  AcceptTransaction(echange : boolean, id : number | undefined)
  {
    return this._httpClient.get<DtoInputTransactionHistoric>
    (HistoricTransactionsService.ENTRY_POINT+"?echange="+echange+
    "&idtransaction="+id);
  }

  fetchByIdUser(): Observable<DtoInputTransactionHistoric[]>
  {
    return this._httpClient.get<DtoInputTransactionHistoric[]>
    (HistoricTransactionsService.ENTRY_POINT+"/fetchByIdUser");
  }
  fetchByIdUserOffer(): Observable<DtoInputTransactionHistoric[]>
  {
    return this._httpClient.get<DtoInputTransactionHistoric[]>
    (HistoricTransactionsService.ENTRY_POINT+"/fetchByIdUserOffer");
  }

  fetchById(id: number): Observable<DtoInputTransactionHistoric> {
    return this._httpClient.get<DtoInputTransactionHistoric>
    (HistoricTransactionsService.ENTRY_POINT+"/"+id);

  }
}
