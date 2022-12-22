import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, of, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements HttpInterceptor {
  private static readonly ENTRY_POINT = environment.ApiUrlAuthentification;
  private static readonly httpOptions = {
    headers: new HttpHeaders(({'Content-type': 'application/json'}))
  };

  constructor(private _httpClient: HttpClient) {
  }

  login(email: string, mdp: string): Observable<any> {

    return this._httpClient.post<any>(AuthentificationService.ENTRY_POINT,
      {
        email: email,
        mdp: mdp
      },
    );
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      withCredentials: true
    });
    return next.handle(authReq);
  }
}
