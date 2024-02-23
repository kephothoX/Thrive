import { Component, OnInit } from '@angular/core';

import { DescopeAuthService } from '@descope/angular-sdk';
import { DescopeService } from './../../../services/descope.service';

import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  flowId = environment.USER_FLOW_ID;

  onSuccess(e: CustomEvent) {
    this._descopeService.saveAdminSession({
      refreshToken: e.detail.refreshJwt,
      sessionToken: e.detail.sessionJwt
    }).subscribe((res: any) => {
      window.sessionStorage.setItem('sessionID', `${res}`);
    });

    this._descopeService.saveAdminUser({
      email: e.detail.user.email,
      decopeUserId: e.detail.user.userId,
      familyName: e.detail.user.familyName,
      givenName: e.detail.user.givenName,
      name: e.detail.user.name
    }).subscribe((res: any) => {
      window.sessionStorage.setItem('UserID', `${res}`);
    });


    window.sessionStorage.setItem('isAuthenticated', 'true');

    window.sessionStorage.setItem('DescopeSession', `${JSON.stringify(e.detail)}`);

    window.sessionStorage.setItem('email', `${e.detail.user.email}`);

    window.sessionStorage.setItem('userId', `${e.detail.user.userId}`);
    window.sessionStorage.setItem('familyName', `${e.detail.user.familyName}`);
    window.sessionStorage.setItem('givenName', `${e.detail.user.givenName}`);

    window.sessionStorage.setItem('name', `${e.detail.user.name}`);

    window.sessionStorage.setItem('refreshToken', `${e.detail.refreshJwt}`);
    window.sessionStorage.setItem('sessionToken', `${e.detail.sessionJwt}`);

    setTimeout(() => {
      this._router.navigate(['/personal']);
    }, 1000);
  }

  onError(error: CustomEvent) {

    this._snackBar.open(`An Error occured while loggin, ${error}`, 'Close');

    this._router.navigate(['/personal/login']);
  }

  token: any;
  isAuthenticated: boolean = false;
  userName: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _descopeAuthService: DescopeAuthService,
    private _descopeService: DescopeService,
    private _router: Router,
    public _snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {

    setTimeout(() => {
      if (window.sessionStorage.getItem('DescopeSession') != null || undefined) {
        this._descopeService.valiateB2CSession({ token: this._descopeAuthService.getSessionToken() }).subscribe((response: any) => {

          if (response.DescopeResponse.jwt != null || undefined) {
            window.sessionStorage.setItem('isAuthenticated', 'true');
          }
        });

        this._router.navigate(['/personal']);

      } else {

        this._snackBar.open('Invalid Session, Login to Continue...', 'Close');

        this._router.navigate(['/personal/login']);

      }

    }, 3000);

  }
}

