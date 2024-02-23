import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SquareService } from '../../../../services/square.service';
import { CurrencyService } from 'src/app/services/currency.service';

import { AppService } from 'src/app/services/app.service';
import { Invoice } from 'src/app/interfaces/invoice';
import { Location } from 'src/app/interfaces/location';

import * as moment from 'moment';


import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit{
  duration: string = '2000';
  lineItemsCount: any[] = new Array('newlineItem',);
  lineItems: any[] = new Array();

  locations: Location[]  = [];

  locationID?: string;
  customerID?: string;
  orderID?: string;

  Currency = this._currencyService.Currency;

  InvoiceTypes: string[] = [ 'BALANCE', 'DEPOSIT', 'INSTALLMENT'];

  orderBackButton: boolean = false;
  invoiceBackButton: boolean = false;


  Invoice?: Invoice;

 ngOnInit() {
   this._squareService.listLocations().subscribe((response: any) => {
     this.locations = response.locations;
   });
 }


  constructor(
    private _formBuilder: FormBuilder,
    private _squareService: SquareService,
    private _currencyService: CurrencyService,
    
    private _appService: AppService,
    private _snackBar: MatSnackBar
  ) { }

  newOrderForm =  this._formBuilder.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required],
    remarks: ['', Validators.required],
    amount: ['', Validators.required],
    currency: ['', Validators.required],
    location: ['', Validators.required],
  });

  newInvoiceForm =  this._formBuilder.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    type: ['', Validators.required],
    balance: [''],
    remarks: ['', Validators.required],
    interval: ['', Validators.required],
    due_date: ['', Validators.required],

  });


  onSubmitOrder() {
    this.orderBackButton = true;

    this.lineItemsCount.pop();
    this.addNewLineItem();

    this._appService.getSquareMainLocation().subscribe((res: any) => {
      const formValues = this.newOrderForm.value;

      const dataSet = {
        "idempotency_key": self.crypto.randomUUID(),
        "order": {
          "location_id": formValues.location,
          "customer_id": window.sessionStorage.getItem('customer_id'),
          "line_items": this.lineItems
        }
      }


      this._squareService.generateNewOrder(JSON.stringify(dataSet)).subscribe((response: any) => {
        this.locationID = response.order.location_id;
        this.orderID = response.order.id;
        this.customerID = response.order.customer_id;

        this._snackBar.open('New Order Created Successfully. Contunue to Create An Invoice', 'Close');
      });

    });

  }

  onSubmitInvoice() {
    this.invoiceBackButton = true;

    const formValues = this.newInvoiceForm.value;

    const dataSet = {
      "idempotency_key": self.crypto.randomUUID(),
      "invoice": {
        "accepted_payment_methods": {
          "bank_account": false,
          "buy_now_pay_later": true,
          "card": false,
          "square_gift_card": false
        },
        "delivery_method": "EMAIL",
        "location_id": this.locationID,
        "sale_or_service_date":  this.formatDate(formValues.date),
        "title": formValues.title,
        "primary_recipient": {
          "customer_id": this.customerID
        },
        "payment_requests": [
          {
            "request_type": formValues.type,
            "tipping_enabled": false,
            "due_date": this.formatDate(formValues.due_date),
            "automatic_payment_source": "NONE",
            "reminders": [
              {
                "relative_scheduled_days": formValues.interval,
                "message": formValues.remarks
              }
            ]
          }
        ],
        "order_id": this.orderID,
        "scheduled_at": new Date().toISOString()
      }
    }

    this._squareService.generateNewInvoice(JSON.stringify(dataSet)).subscribe((response: any) => {
      this._snackBar.open('New Invoice Generated and will be sent to Recipient.', 'Close');

      this.Invoice = response.invoice;

    });
  }

  addNewLineItem() {
    this.lineItemsCount.push('newLineItem');

   const formValues = this.newOrderForm.value;

    const line_items = {
      "base_price_money": {
        "amount": formValues.amount,
        "currency": 'USD'
      },
      "quantity": formValues.quantity?.toString(),
      "name": formValues.name,
      "note": formValues.remarks
    }

    this.lineItems.push(line_items);


  }

  formatDate(date: any) {
    return moment(date).format('YYYY-MM-DD');
  }



}
