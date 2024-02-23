import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';

import { CardsComponent } from './components/cards/cards.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { PauseSubscriptionComponent } from './components/pause-subscription/pause-subscription.component';
import { CancelSubscriptionComponent } from './components/cancel-subscription/cancel-subscription.component';
import { ResumeSubscriptionComponent } from './components/resume-subscription/resume-subscription.component';

import { SquareUserComponent } from './square-user/square-user.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from '../personal/auth.guard';

const routes: Routes = [

  { path: '', title: 'My Thrive', component: PersonalComponent },
  { path: 'login', title: 'Authentication & Authorization', component: AuthComponent },
  {path: 'square/user', title: 'New Square User', component: SquareUserComponent, canActivate: [AuthGuard] },
  
  
  { path: 'billing/payments', title: 'Billing (Payments)', component: PaymentsComponent, canActivate: [AuthGuard] },
  { path: 'billing/cards', title: 'Billing (Manage cards)', component: CardsComponent, canActivate: [AuthGuard] },
  { path: 'billing/new-card', title: 'Billing (New Card)', component: NewCardComponent, canActivate: [AuthGuard] },

  { path: 'partners', title: 'Our Partners', component: LocationsComponent, canActivate: [AuthGuard] },


  { path: 'subscriptions/plans', title: 'My Subscriptions', component: SubscriptionsComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions/pause-subscription', title: 'Pause Subscription', component: PauseSubscriptionComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions/cancel-subscription', title: 'Cancel Subscription', component: CancelSubscriptionComponent, canActivate: [AuthGuard] },
  { path: 'subscriptions/resume-subscription', title: 'Resume Subscription', component: ResumeSubscriptionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
