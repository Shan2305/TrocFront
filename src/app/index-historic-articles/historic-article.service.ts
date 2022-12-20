import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HistoricTransactionsService} from "../index-historic-transactions/historic-transactions.service";
import {DtoInputArticle} from "../index-articles/dto/dtoInputArticle";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoricArticleService {
  static readonly ENTRY_POINT = environment.ApiUrlHistoricArticle;

  constructor(private _httpClient: HttpClient) {
  }
  ArchivedArticle(id : number | undefined)
  {
    return this._httpClient.get<DtoInputArticle>(HistoricArticleService.ENTRY_POINT+
    "?idArticle="+id);
  }
  fetchById(id: number): Observable<DtoInputArticle> {
    return this._httpClient.get<DtoInputArticle>(HistoricArticleService.ENTRY_POINT + '/Id/' + id);
  }
}
