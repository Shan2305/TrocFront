import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "../index-user/dto/dto-input-user";
import {DtoInputArticle} from "./dto/dtoInputArticle";
import {DtoCreateUser} from "../index-user/dto/dto-create-user";
import {DtoCreateArticle} from "./dto/dto-create-article";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  static readonly ENTRY_POINT = environment.ApiUrlArticle;

  constructor(private _httpClient: HttpClient) { }

  fetchAll(): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT);
  }

  //https://localhost:7018/api/v1/Article/Create?name=test2&urlImage=test2&nomCat=Voiture&description=descirption
  create(dto:DtoCreateArticle):Observable<DtoInputArticle>{
    return this._httpClient.post<DtoInputArticle>( ArticlesService.ENTRY_POINT+"/Create?name="+dto.name+
      "&urlImage="+dto.urlImage+"&nomCat="+dto.nomCat+"&description="+dto.description, dto);
  }

  //https://localhost:7018/api/v1/Article/Id/33
  fetchById(id: number): Observable<DtoInputArticle> {
    return this._httpClient.get<DtoInputArticle>(ArticlesService.ENTRY_POINT+'/Id/'+id);
  }

  fetchByName(name: String): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT+'/search?name='+name);
  }

  fetchByNameCategory(name: String): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT+'/'+name);
  }

  //https://localhost:7018/api/v1/Article/Id_Users/1
  fetchAllArticleByUserId(id: number): Observable<DtoInputArticle[]> {
  return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT+'/Id_Users/'+id);
  }


  fetchAllArticleByUserIdConnected(): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT+'/Id_Users/');
  }


}
