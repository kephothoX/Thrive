import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient,	withInterceptors } from '@angular/common/http';
import { DescopeAuthModule, DescopeAuthService, descopeInterceptor } from '@descope/angular-sdk';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';

import { HeaderComponent } from './components/header/header.component';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './components/auth/auth.component';

import { zip } from 'rxjs';

export function initializeApp(authService: DescopeAuthService) {
	return () => zip([authService.refreshSession(), authService.refreshUser()]);
}



@NgModule({
  declarations: [
    BusinessComponent,
    HeaderComponent,
    AuthComponent   

  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,

    DescopeAuthModule.forRoot({
			projectId: environment.B2B_PROJ_ID
		})
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [DescopeAuthService],
        multi: true
      },
      provideHttpClient(withInterceptors([descopeInterceptor])),
      DescopeAuthService
  ]
})
export class BusinessModule { }
