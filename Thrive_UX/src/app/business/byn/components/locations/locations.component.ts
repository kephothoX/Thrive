import { Component, OnInit } from '@angular/core';

import { SquareService } from '../../../../services/square.service';

import { Location } from '../../../../interfaces/location';

import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  displayedColumns: string[] = ['name', 'description', 'phone_number', 'type', 'status', 'id'];

  constructor(
    private _squareService: SquareService,
    
    public _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this._squareService.listLocations().subscribe((results: any) => {
      this.locations = results.locations;

    });
  }

  deleteLocation(id: string) {

  }

}
