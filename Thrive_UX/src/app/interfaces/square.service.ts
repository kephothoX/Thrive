import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { ErrorService } from '../../services/error.service';
import { AppService } from '../../services/app.service';

import { Observable, catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) { }



  addNewCatalog(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/newSquareCatalog`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  listCatalog(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/getSquareCatalog`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCatalogObject(object_id: string): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/catalog/${ object_id }`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


  addNewLocation(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/newSquareLocation`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateLocation(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/updateSquareLocation`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  listLocations(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/getSquareLocations`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getLocation(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/getSquareLocation`, data,  this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  editLocation(location: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/editSquareLocation`, location, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUsers(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/getSquareUsers`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/getSquareUser`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/updateSquareUser`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  deleteUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/deleteSquareUser`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getInvoices(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/getSquareInvoices`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


}
