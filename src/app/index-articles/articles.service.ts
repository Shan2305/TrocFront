import {Injectable} from '@angular/core';
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

  constructor(private _httpClient: HttpClient) {
  }

  fetchAll(): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT);
  }

  //https://localhost:7018/api/v1/Article/Create?name=test2&urlImage=test2&nomCat=Voiture&description=descirption
  create(dto: DtoCreateArticle): Observable<DtoInputArticle> {
    return this._httpClient.post<DtoInputArticle>(ArticlesService.ENTRY_POINT + "/Create?name=" + dto.name +
      "&urlImage=" + dto.urlImage + "&nomCat=" + dto.nomCat + "&description=" + dto.description, dto);
  }

  //https://localhost:7018/api/v1/Article/Id/33
  fetchById(id: number): Observable<DtoInputArticle> {
    return this._httpClient.get<DtoInputArticle>(ArticlesService.ENTRY_POINT + '/Id/' + id);
  }

  fetchByName(name: String): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT + '/search?name=' + name);
  }

  fetchByNameCategory(name: String): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT + '/' + name);
  }

  //https://localhost:7018/api/v1/Article/Id_Users/1
  fetchAllArticleByUserId(id: number): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT + '/Id_Users/' + id);
  }


  fetchAllArticleByUserIdConnected(): Observable<DtoInputArticle[]> {
    return this._httpClient.get<DtoInputArticle[]>(ArticlesService.ENTRY_POINT + '/Id_Users/');
  }

//https://localhost:7018/api/v1/Article?name=arbremodif&description=j%27ai%20modif&url=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F29-293731_tubes-arbres-et-verdures-arbre-png-architecture-tools.png&id=1
  update(name: string, description: string, url: string, id: number | undefined): Observable<any> {
    return this._httpClient.put(ArticlesService.ENTRY_POINT + "?name=" + name + "&description=" + description + "&url=" + url + "&id=" + id, "");
  }

  delete(id: number | undefined): Observable<any> {
    return this._httpClient.delete(ArticlesService.ENTRY_POINT + "/" + id);
  }
}
