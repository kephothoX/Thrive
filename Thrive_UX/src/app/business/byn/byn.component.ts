import { Component } from '@angular/core';

@Component({
  selector: 'app-byn',
  templateUrl: './byn.component.html',
  styleUrls: ['./byn.component.scss']
})
export class BynComponent {

  logout() {
    window.sessionStorage.removeItem('isAuthenticated');

    window.sessionStorage.removeItem('DescopeSession');

    window.sessionStorage.removeItem('email');

    window.sessionStorage.removeItem('userId');
    window.sessionStorage.removeItem('familyName');
    window.sessionStorage.removeItem('givenName');

    window.sessionStorage.removeItem('name');

    window.sessionStorage.removeItem('refreshToken');
    window.sessionStorage.removeItem('sessionToken');

    window.location.reload();

  }

}
