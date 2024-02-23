import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError } from 'rxjs';


import { AppService } from 'src/app/services/app.service';
import { ErrorService } from 'src/app/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class DescopeService {

  constructor(
    private _httpClient: HttpClient,
    private _appService: AppService,
    private _errorService: ErrorService,
  ) { }



  getJWT(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/saml/exchange`, data).pipe(catchError(this._errorService.handleError));
  }

  valiateB2BSession(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/b2b/session/validate`, data).pipe(catchError(this._errorService.handleError));
  }

  valiateB2CSession(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/b2c/session/validate`, data).pipe(catchError(this._errorService.handleError));
  }

  saveAdminSession(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/descope/admin/session/new`, data).pipe(catchError(this._errorService.handleError));
  }

  saveAdminUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/descope/admin/user/new`, data).pipe(catchError(this._errorService.handleError));
  }

   saveUserSession(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/descope/user/session/new`, data).pipe(catchError(this._errorService.handleError));
  }

  saveUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/descope/user/new`, data).pipe(catchError(this._errorService.handleError));
  }

}
