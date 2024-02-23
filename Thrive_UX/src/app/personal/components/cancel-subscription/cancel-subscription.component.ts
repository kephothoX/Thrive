import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SquareService } from '../../../services/square.service';



@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.scss']
})
export class CancelSubscriptionComponent implements OnInit {

  constructor (
    private _squareService: SquareService,
    
    private _router: Router,
    public _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if(window.sessionStorage.getItem('active_subscription_id')) {
      this._squareService.cancelSubscription({ id: window.sessionStorage.getItem('active_subscription_id')}).subscribe((response: any) => {
        this._snackBar.open('Subscription Cancelled...', 'Close');

        setTimeout(() => {
          this._router.navigate(['/personal']);
        }, 1000);

      });
    } else {
      this._snackBar.open('You have no Avtive Subscriptions. Subscribe to Continue..', 'Close');

    }

  }

}
