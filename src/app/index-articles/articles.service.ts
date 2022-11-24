import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "../index-user/dto/dto-input-user";
import {DtoInputArticle} from "./dto/dtoInputArticle";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private static readonly ENTRY_POINT = environment.ApiUrlArticle;

  constructor(private _httpClient: HttpClient) { }

  fetchAll(): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT);
  }
}
