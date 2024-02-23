import { Component, OnInit } from '@angular/core';

import { SquareService } from '../../../../services/square.service';

import { Catalog } from '../../../../interfaces/catalog';

import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent implements OnInit {
  displayedColumns: string[] = ['id', 'version', 'name', 'cadence', 'amount'];
  subscriptions: Catalog[] = [];

  constructor(
    private _squareService: SquareService,
    
    public _snackBar: MatSnackBar,
  ) {}


  ngOnInit() {
    const qs = {
    "query": {
      "filter": {
        "location_ids": [
          "L65G08M451324"
        ]
      }
    }
  }
    this._squareService.listCatalog().subscribe((response: any) => {
      this.subscriptions = response.SQResponse.objects;

      
    });
  }

}
