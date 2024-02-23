import { NgModule,  APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient,	withInterceptors } from '@angular/common/http';
import { DescopeAuthModule, DescopeAuthService, descopeInterceptor } from '@descope/angular-sdk';

import { PersonalRoutingModule } from './personal-routing.module'
import { PersonalComponent } from './personal.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { NewCardComponent } from './components/new-card/new-card.component';
import { CardsComponent } from './components/cards/cards.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { CancelSubscriptionComponent } from './components/cancel-subscription/cancel-subscription.component';
import { PauseSubscriptionComponent } from './components/pause-subscription/pause-subscription.component';
import { ResumeSubscriptionComponent } from './components/resume-subscription/resume-subscription.component';
import { UpgradeSubscriptionComponent } from './components/upgrade-subscription/upgrade-subscription.component';

import { HeaderComponent } from './components/header/header.component';

import { environment } from 'src/environments/environment';
import { AuthComponent } from './components/auth/auth.component';

import { zip } from 'rxjs';
import { SquareUserComponent } from './square-user/square-user.component';

export function initializeApp(authService: DescopeAuthService) {
	return () => zip([authService.refreshSession(), authService.refreshUser()]);
}


@NgModule({
  declarations: [
    HeaderComponent,
    PersonalComponent,
    NewCardComponent,
    CardsComponent,
    PaymentsComponent,
    LocationsComponent,
    SubscriptionsComponent,
    CancelSubscriptionComponent,
    PauseSubscriptionComponent,
    ResumeSubscriptionComponent,
    UpgradeSubscriptionComponent,
    AuthComponent,
    SquareUserComponent,

  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatTableModule,
    MatProgressSpinnerModule,

    DescopeAuthModule.forRoot({
			projectId: environment.B2C_PROJ_ID
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
export class PersonalModule { }
