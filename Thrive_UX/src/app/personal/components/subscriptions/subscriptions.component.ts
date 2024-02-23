import { Component, OnInit } from '@angular/core';
import { SquareService } from '../../../services/square.service'
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Invoice } from '../../../interfaces/invoice';



@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  invoices: Invoice[] = [];

  displayedColumns: string[] = ['invoice_number', 'title', 'created_at', 'subscription_amount', 'amount_paid', 'due_date', 'status', 'public_url']

  constructor(
    private _squareService: SquareService,
    private _router: Router,
    public _snackBar: MatSnackBar,
  ) {
    window.sessionStorage.setItem('active_route', `${ this._router.routerState.snapshot.url }` );
  }


  ngOnInit() {
    if(Boolean(window.sessionStorage.getItem('auth_login_status')) == true) {
      const qs = {
        "query": {
          "filter": {
            "customer_ids": [
              `${ window.sessionStorage.getItem('customer_id') }`
            ],
            "location_ids": [
              `${ window.sessionStorage.getItem('main_loc') }`
            ]
          }
        }
      };

      this._squareService.getSubscriptions(qs).subscribe((response: any) => {
        this.invoices = response.SQResponse.invoices;

        window.sessionStorage.setItem('active_subscription_id', `${ response.SQResponse.invoices[0].subscription_id}`);

      });

    } else {
      this._router.navigate(['/personal/login']);
    }

  }

}
