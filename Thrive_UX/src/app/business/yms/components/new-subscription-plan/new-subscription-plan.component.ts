import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CurrencyService } from '../../../../services/currency.service';
import { CadenceService } from '../../../../services/cadence.service';
import { SquareService } from '../../../../services/square.service';




import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-subscription-plan',
  templateUrl: './new-subscription-plan.component.html',
  styleUrls: ['./new-subscription-plan.component.scss']
})
export class NewSubscriptionPlanComponent {
  isLinear: boolean = true;

  Type: any[] = [
    {
      name: 'Static',
      value: 'STATIC'
    },
    {
      name: 'Relative',
      value: 'RELATIVE'
    }
  ]

  constructor(
    private _formBuilder: FormBuilder,
    private _currencyService: CurrencyService,
    
    private _squareService: SquareService,
    private _cadenceService: CadenceService,
    public _snackBar: MatSnackBar,
  ) {}

  Currency = this._currencyService.Currency;

  Cadence = this._cadenceService.Cadence;

  newSubscriptionPlanVariationForm = this._formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required ],
    cadence: ['', Validators.required],
    currency: ['', Validators.required],
    amount: ['', Validators.required],
    ordinal: ['', Validators.required ],
    periods: ['', Validators.required ],
    type: ['', Validators.required]
  });

  newSubscriptionPlanForm = this._formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required ]
  });

  onSubmitSubscriptionPlan () {
    let formValues = this.newSubscriptionPlanForm.value;

    let dataset = {
      'idempotency_key': self.crypto.randomUUID(),
      'object': {
        'type': 'SUBSCRIPTION_PLAN',
        'id': `#${ formValues.id }`,
        'subscription_plan_data': {
          'name': `${ formValues.name }`,
        }
      }
    };

    this._squareService.addNewCatalog(dataset).subscribe((response: any) => {
      this._snackBar.open('New Subscription Plan Created Successfully', 'Close');
      
      console.log(response);

      window.localStorage.setItem('SubscriptionPlanId', `${ response.SQResponse.catalog_object.id }`)
    });
  }


  onSubmitSubscriptionPlanVariation () {
    let formValues = this.newSubscriptionPlanVariationForm.value;

    let dataSet = {
      'idempotency_key': self.crypto.randomUUID(),
      'object': {
        'type': 'SUBSCRIPTION_PLAN_VARIATION',
        'id': `#${ formValues.id }`,
        'present_at_all_locations': true,
        'subscription_plan_variation_data': {
          'name': formValues.name,
          'phases': [
            {
              'cadence': formValues.cadence,
              'pricing': {
                'price_money': {
                  'amount': formValues.amount,
                  'currency': 'USD'
                },
                'type': formValues.type
              },
              'periods': formValues.periods,             
              'ordinal': formValues.ordinal
            }
          ],
          'subscription_plan_id': window.localStorage.getItem('SubscriptionPlanId')
        }
      }
    };


    this._squareService.addNewCatalog(JSON.stringify(dataSet)).subscribe((response: any) => {
      this._snackBar.open('New Subscription Plan Created Successfully', 'Close');
      
      console.log(response);

      this._squareService.saveSubscriptionPanId({ 
        created_by: window.sessionStorage.getItem('userId'),
        subscription_id: response.SQResponse.catalog_object.id,
        title: response.SQResponse.catalog_object.subscription_plan_variation_data.name,
        description: ''
      }).subscribe((res: any) => {
        console.log(res);
      })
    });
  }

  resetForm() {
    this.newSubscriptionPlanForm.reset();
    window.location.reload();
  }
}
