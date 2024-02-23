import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Subscription } from '../../../interfaces/subscription';


import { SquareService } from '../../../services/square.service';


import * as moment from 'moment';

@Component({
  selector: 'app-resume-subscription',
  templateUrl: './resume-subscription.component.html',
  styleUrls: ['./resume-subscription.component.scss']
})
export class ResumeSubscriptionComponent implements OnInit {
  ChangeTiming: string[] = ['IMMEDIATE', 'END_OF_BILLING_CYCLE'];

  subscription?: Subscription;

  constructor (
    private _squareService: SquareService,
    
    private _formBuilder: FormBuilder,
    private _router: Router,
    public _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if(window.sessionStorage.getItem('active_subscription_id')) {
      this._squareService.getSubscriptionById( { id: window.sessionStorage.getItem('active_subscription_id')}).subscribe((response: any) => {
        this.subscription = response.subscription;

      });
    } else {
      this._snackBar.open('You have no Active Subscriptions. Subscribe to Continue..', 'Close');

      
      this._router.navigate(['/personal/']);

    }
  }


  resumeSubscriptionForm = this._formBuilder.group({
    resume_change_timing: ['', Validators.required],
    resume_effective_date: ['', Validators.required]
  });

  onSubmit() {
    const formValues = this.resumeSubscriptionForm.value;

    const dataSet = {
      subscription_id: window.sessionStorage.getItem('active_subscription_id'),
      dataSet: {
        resume_change_timing: formValues.resume_change_timing,
        resume_effective_date: this.formatDate(formValues.resume_effective_date)
      }
    }

    this._squareService.resumeSubscription(dataSet).subscribe((response: any) => {
      this._snackBar.open('Subscription Resumed Successfully...', 'Close');
      this._router.navigate(['/personal/subscriptions/my-invoices']);
    })

  }

  formatDate(date: any) {
    return moment(date).format('YYYY-MM-DD');
  }


}
