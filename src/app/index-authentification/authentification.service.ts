import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoLogin} from "./dto/dto-login";
import {AuthentificationFormComponent} from "./authentification-form/authentification-form.component";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private static readonly ENTRY_POINT = environment.ApiUrlAuthentification;
  private static readonly httpOptions = {
    headers: new HttpHeaders(({'Content-type': 'application/json'}))
  };

  constructor(private _httpClient: HttpClient) {
  }

  login(email: string, mdp: string): Observable<any> {

    return this._httpClient.post(AuthentificationService.ENTRY_POINT,
      {
        email: email,
        mdp: mdp
      },
      AuthentificationService.httpOptions,
    );

    localStorage.setItem("cookie",email.toString())
  }
}
