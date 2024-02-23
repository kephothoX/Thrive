import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from 'src/app/services/app.service';
import { SquareService } from '../../services/square.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from 'src/app/interfaces/country';

import { Payment } from '../../interfaces/payment';

@Component({
  selector: 'app-square-user',
  templateUrl: './square-user.component.html',
  styleUrls: ['./square-user.component.scss']
})
export class SquareUserComponent {

  visibility: String = 'hidden';
  disable_next: boolean = true;
  duration: string = '2000';
  email!: String | null;
  Countries?: Country[];
  Phone_Prefix?: string;
  family_name!: String | null;
  given_name!: String | null;

  constructor(
    private _formBuilder: FormBuilder,
    private _appService: AppService,
    private _router: Router,
    private _squareService: SquareService,
    public _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this._appService.getCountryCodes().subscribe((result: any) => {
      this.Countries = result;
    });

    
    this.email = window.sessionStorage.getItem('email');
    this.family_name = window.sessionStorage.getItem('familyName');
    this.given_name = window.sessionStorage.getItem('givenName');
    
  }

  newSqUserForm = this._formBuilder.group({
    given_name: ['', Validators.required],
    family_name: ['', Validators.required],
    email_address: ['', Validators.required],
    phone_number: ['', Validators.required],
    company_name: ['', Validators.required],

    address: this._formBuilder.group({
      address_line_1: ['', Validators.required],
      address_line_2: ['', Validators.required],
      locality: ['', Validators.required],
      administrative_district_level_1: ['', Validators.required],
      postal_code: ['', Validators.required],
      country: ['', Validators.required]
    }),
  });


  newUserCredentialsForm = this._formBuilder.group({
    email_address: ['', Validators.required],
    password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]
    ]
  });


  getCountryPrefix(prefix: string) {
    this.Phone_Prefix = prefix;
  }

  addBillingInformation = this._formBuilder.group({

  });

  onSubmitSquareUser() {
    const newUserFormValues = this.newSqUserForm.value;

    const sQUserDataSet = {
      idempotency_key: self.crypto.randomUUID(),
      given_name: newUserFormValues.given_name,
      family_name: newUserFormValues.family_name,
      email_address: newUserFormValues.email_address,
      phone_number: `${this.Phone_Prefix}${newUserFormValues.phone_number}`,
      company_name: newUserFormValues.company_name,

      address: {
        address_line_1: newUserFormValues.address?.address_line_1,
        address_line_2: newUserFormValues.address?.address_line_2,
        locality: newUserFormValues.address?.locality,
        administrative_district_level_1: newUserFormValues.address?.administrative_district_level_1,
        postal_code: newUserFormValues.address?.postal_code,
        country: newUserFormValues.address?.country
      },
    };

    const verificationDetails = {
      amount: '1.00',
      billingContact: {
        addressLines: [newUserFormValues.address?.address_line_1, newUserFormValues.address?.address_line_2],
        familyName: newUserFormValues.family_name,
        givenName: newUserFormValues.given_name,
        email: newUserFormValues.email_address,
        country: newUserFormValues.address?.country,
        phone: `${this.Phone_Prefix}${newUserFormValues.phone_number}`,
        region: newUserFormValues.address?.country,
        city: newUserFormValues.address?.locality,
      },
      currencyCode: 'USD',
      intent: 'CHARGE',
    };

    this._squareService.newSquareUser(sQUserDataSet).subscribe((response: any) => {
      this._snackBar.open('Square User Created Successfully', 'Close');

      window.sessionStorage.setItem('squareCustomerId', `${ response.SQResponse.customer.id}`);

      this._router.navigate(['/personal']);
    });
  }



  



  createPayment() {
    const payment: Payment = {
      location_id: window.sessionStorage.getItem('main_loc'),
      source_id: window.sessionStorage.getItem('token'),
      verification_token: window.sessionStorage.getItem('verificationToken'),
      idempotency_key: window.crypto.randomUUID(),
      autocomplete: true,
      note: "Customer Card Verification",
      customer_id: "W92WH6P11H4Z77CTET0RNTGFW8",
      amount_money: {
        amount: 1,
        currency: "USD"
      },
    };
    this._squareService.newPayment(payment).subscribe((result: any) => {
      console.log(result);
    });
  }


  getPayment() {
    this.disable_next = false;
  }



}
