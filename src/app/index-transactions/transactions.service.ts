import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DtoInputCommentary} from "../index-commentary/dto/DtoInputCommentary";
import {DtoInputTransactions} from "./dto/DtoInputTransactions";
import {DtoInputArticle} from "../index-articles/dto/dtoInputArticle";
import {DtoCreateArticle} from "../index-articles/dto/dto-create-article";
import {DtoCreateTransaction} from "./dto/DtoCreateTransaction";


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
  fetchByIdUserOffer(): Observable<DtoInputTransactions[]>
  {
    return this._httpClient.get<DtoInputTransactions[]>
    (TransactionsService.ENTRY_POINT+"/fetchByIdUserOffer");
  }

  fetchById(id: number): Observable<DtoInputTransactions> {
    return this._httpClient.get<DtoInputTransactions>(TransactionsService.ENTRY_POINT+'/'+id);
  }

  //https://localhost:7018/api/v1/Transaction?Id_user1=2&Id_user2=1&Article1=5&Article2=1
  create(dto:DtoCreateTransaction):Observable<DtoInputTransactions>{
    return this._httpClient.post<DtoInputTransactions>( TransactionsService.ENTRY_POINT+"/?Id_user1="+dto.id_User1+
      "&Id_user2="+dto.id_User2+"&Article1="+dto.article1+"&Article2="+dto.article2, dto);
  }

}
