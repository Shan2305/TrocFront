import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DtoInputCommentary} from "../index-commentary/dto/DtoInputCommentary";
import {DtoInputTransactions} from "./dto/DtoInputTransactions";
import {DtoInputArticle} from "../index-articles/dto/dtoInputArticle";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private static readonly ENTRY_POINT = environment.ApiUrlTransactions;
  constructor(private _httpClient : HttpClient) { }

  fetchByIdUser(): Observable<DtoInputTransactions[]>
  {
    return this._httpClient.get<DtoInputTransactions[]>
    (TransactionsService.ENTRY_POINT+"/fetchByIdUser");
  }

  fetchById(id: number): Observable<DtoInputTransactions> {
    return this._httpClient.get<DtoInputTransactions>(TransactionsService.ENTRY_POINT+'/'+id);
  }

}
