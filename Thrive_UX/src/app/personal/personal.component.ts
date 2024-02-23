import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThriveService } from '../services/thrive.service';
import { AppService } from '../services/app.service';
import { SquareService } from '../services/square.service';

import { Subscriptionplan } from '../interfaces/subscriptionplan';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  SubscriptionPlans: Subscriptionplan[] = new Array();


  constructor(
    private _thriveService: ThriveService,
    private _appService: AppService,
    private _squareService: SquareService,
    private _router: Router,
    public _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._thriveService.getSubscriptionPlans().subscribe((response: any) => {
      console.log(response);

      this.SubscriptionPlans = response;
    });

    this._appService.getSquareMainLocation().subscribe((results: any) => {
      window.sessionStorage.setItem('squareMainLocation', results.SQResponse.location.id);
    });

    this._squareService.getUser(
      {
        query: {
          filter: {
            email_address: {
              exact: window.sessionStorage.getItem('email')
            }
          }
        }
      }
    ).subscribe((response: any) => {
      console.log(response);

      if ( response.SQResponse == null || undefined || response.SQResponse.customers.length <= 0) {
        this._router.navigate(['/personal/square/user']);

      } else {

        window.sessionStorage.setItem('squareCustomerId', `${ response.SQResponse.customers[0].id }`)
      }
    });


    if (window.sessionStorage.getItem('squareCustomerId') == null || undefined) {

      this._router.navigate(['/personal/square/user']);
    }

    if(Boolean(window.sessionStorage.getItem('isAuthenticated')) == false || null || undefined ) {

      this._router.navigate(['/personal/login']);
    }

  }


  subscribe(planId: String) {
    console.log(planId);

    this._appService.getSquareMainLocation().subscribe((result: any) => {
      const dataSet = {
        "idempotency_key": self.crypto.randomUUID(),
        "location_id": result.SQResponse.location.id,
        "plan_variation_id": planId,
        "customer_id": window.sessionStorage.getItem('squareCustomerId')

      }
      this._squareService.newSubscriptionPlan(dataSet).subscribe((res: any) => {
        this._snackBar.open('Subscription Successfull.', 'Close');



        this._router.navigate(['/personal/subscriptions/plans']);

      });
    });
  }

  
}


