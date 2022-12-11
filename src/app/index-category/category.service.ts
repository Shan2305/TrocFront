import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {DtoInputUser} from "../index-user/dto/dto-input-user";
import {DtoInputCategory} from "./dto/dto-input-category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private static readonly ENTRY_POINT = environment.ApiUrlCategory;

  constructor(private _httpClient : HttpClient) { }

  fetchAll(): Observable<DtoInputCategory[]> {
    return this._httpClient.get<DtoInputCategory[]>(CategoryService.ENTRY_POINT);
  }
}
