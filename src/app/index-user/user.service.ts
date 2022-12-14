import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {DtoInputUser} from "./dto/dto-input-user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DtoCreateUser} from "./dto/dto-create-user";
import {DtoInputArticle} from "../index-articles/dto/dtoInputArticle";
import {DtoCreateArticle} from "../index-articles/dto/dto-create-article";
import {ArticlesService} from "../index-articles/articles.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly ENTRY_POINT = environment.ApiUrl;

  constructor(private _httpClient: HttpClient) {
  }

  fetchAll(): Observable<DtoInputUser[]> {
    return this._httpClient.get<DtoInputUser[]>(UserService.ENTRY_POINT);
  }

  create(dto:DtoCreateUser):Observable<DtoInputUser>{
    return this._httpClient.post<DtoInputUser>( UserService.ENTRY_POINT+"?email="+dto.email+"&pseudo="+dto.pseudo+"&localite="+dto.localite+"&mdp="+dto.mdp,dto);
  }

  //https://localhost:7018/api/v1/Users/1
  fetchById(id: number): Observable<DtoInputUser> {
    return this._httpClient.get<DtoInputUser>(UserService.ENTRY_POINT+'/'+id);
  }

  //https://localhost:7018/api/v1/Users/fetchById
  fetchByIdToken(): Observable<DtoInputUser> {
    return this._httpClient.get<DtoInputUser>(UserService.ENTRY_POINT+'/fetchById');
  }



}
