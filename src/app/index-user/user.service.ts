import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {DtoInputUser} from "./dto/dto-input-user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DtoCreateUser} from "./dto/dto-create-user";
import {DtoInputArticle} from "../index-articles/dto/dtoInputArticle";
import {DtoCreateArticle} from "../index-articles/dto/dto-create-article";
import {ArticlesService} from "../index-articles/articles.service";
import {UserUpdateComponent} from "./user-update/user-update.component";

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
  fetchById(id: number | undefined): Observable<DtoInputUser> {
    return this._httpClient.get<DtoInputUser>(UserService.ENTRY_POINT+'/'+id);
  }

  //https://localhost:7018/api/v1/Users/fetchById
  fetchByIdToken(): Observable<DtoInputUser> {
    return this._httpClient.get<DtoInputUser>(UserService.ENTRY_POINT+'/fetchById');
  }

  //https://localhost:7018/api/v1/Users?email=flo&pseudo=flo&localite=horrues&id=1
  update(email: string, pseudo: string, localite: string, id: any):Observable<any>
  {
    return this._httpClient.put(UserService.ENTRY_POINT+ "?email="+email+"&pseudo="+pseudo+"&localite="+localite+"&id="+id,"");
  }


}
