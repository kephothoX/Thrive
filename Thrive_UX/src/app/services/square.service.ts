import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError } from 'rxjs';

import { Payment } from '../interfaces/payment';
import { AppService } from 'src/app/services/app.service';
import { ErrorService } from 'src/app/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class SquareService {

  constructor(
    private _httpClient: HttpClient,
    private _appService: AppService,
    private _errorService: ErrorService,
  ) { }

  newSubscriptionPlan(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/subscription/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  newSubscriptionPlanOnlineCheckout(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/square/online/subscription/checkout`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCatalogWithID(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/catalog/object/id`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  addNewCard(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/square/card/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  generateNewOrder(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/square/order/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  generateNewInvoice(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/square/invoice/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  newPayment(payment: Payment): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/payment/new`, payment, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));

  }

  getSubscriptions(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.ConvexEndpoint}/square/subscriptions`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCustomerCards(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.ConvexEndpoint}/square/cards`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCard(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.ConvexEndpoint}/square/card`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

   disableCard(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.ConvexEndpoint }/square/card/disable`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  /* listLocations(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/getSquareLocations`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }*/

  pauseSubscription(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/subscription/pause`, data,  this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  cancelSubscription(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/subscription/cancel`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  resumeSubscription(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/subscription/resume`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

   getSubscriptionById(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/subscription/id`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  addNewCatalog(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/catalog/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  listCatalog(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/square/catalog`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCatalogObject(object_id: string): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/catalog/${ object_id }`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


  addNewLocation(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/location/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateLocation(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/location/update`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  listLocations(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/square/locations`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getLocation(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/location`, data,  this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  editLocation(location: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/location/update`, location, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUsers(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/square/users`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/user`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square-user/update`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  deleteUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/square/user/delete`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getInvoices(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/square/invoices`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  saveInvoiceId(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/invoices/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  saveSubscriptionPanId(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint}/subscriptions/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


  newSquareUser(user: any): Observable<any> {
    return this._httpClient.post(`${this._appService.ConvexEndpoint}/square/user/new`, user, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }



}
