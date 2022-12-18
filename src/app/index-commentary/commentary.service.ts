import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoInputUser} from "../index-user/dto/dto-input-user";
import {DtoInputCommentary} from "./dto/DtoInputCommentary";
import {DtoCreateArticle} from "../index-articles/dto/dto-create-article";
import {DtoInputArticle} from "../index-articles/dto/dtoInputArticle";
import {DtoCreateCommentary} from "./dto/DtoCreateCommentary";

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

  //https://localhost:7018/api/v1/Commentary?note=5&nom=math&mesasge=bien%20jou%C3%A9&id_User=1
  create(dto: DtoCreateCommentary | null):Observable<DtoInputCommentary>{
    return this._httpClient.post<DtoInputCommentary>( CommentaryService.ENTRY_POINT+"/?note="+dto?.note+
      "&nom="+dto?.nom+"&mesasge="+dto?.message+"&id_User="+dto?.idUser, dto);
  }


}
