import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError } from 'rxjs';


import { AppService } from 'src/app/services/app.service';
import { ErrorService } from 'src/app/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class ThriveService {

   constructor(
    private _httpClient: HttpClient,
    private _appService: AppService,
    private _errorService: ErrorService,
  ) { }



  getSubscriptionPlans( ): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/subscriptions`).pipe(catchError(this._errorService.handleError));
  }
}
