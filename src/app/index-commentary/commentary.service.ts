import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "../index-user/dto/dto-input-user";
import {DtoInputCommentary} from "./dto/DtoInputCommentary";

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  private static readonly ENTRY_POINT = environment.ApiUrlCommentary;

  constructor(private _httpClient: HttpClient) { }

  //https://localhost:7018/api/v1/Commentary/Id_Users/3
  fetchById(id: number): Observable<DtoInputCommentary[]> {
    return this._httpClient.get<DtoInputCommentary[]>(CommentaryService.ENTRY_POINT+'/Id_Users/'+id);
  }
}
