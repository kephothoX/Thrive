import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';


import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title?: string;

  accountEmail?: string | null | undefined  = window.sessionStorage.getItem('email');

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public _snackBar: MatSnackBar,
  ) {  }

  ngOnInit() {
    this.title = this._activatedRoute.snapshot.routeConfig?.title?.toString();
    this.accountEmail = window.sessionStorage.getItem('email');
    console.log(this.accountEmail);

  }


  

  logoutUser() {
    window.sessionStorage.removeItem('isAuthenticated');

    window.sessionStorage.removeItem('DescopeSession');

    window.sessionStorage.removeItem('email');

    window.sessionStorage.removeItem('userId');
    window.sessionStorage.removeItem('familyName');
    window.sessionStorage.removeItem('givenName');

    window.sessionStorage.removeItem('name');

    window.sessionStorage.removeItem('refreshToken');
    window.sessionStorage.removeItem('sessionToken');

    this._router.navigate(['/personal/login']);

  }

}
