import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YmsComponent } from './yms.component';

import { NewVendorComponent } from './components/new-vendor/new-vendor.component';
import { EditVendorComponent } from './components/edit-vendor/edit-vendor.component';
import { EditLocationComponent } from './components/edit-location/edit-location.component';
import { NewLocationComponent } from './components/new-location/new-location.component';
import { NewSubscriptionPlanComponent } from './components/new-subscription-plan/new-subscription-plan.component';


import { LocationsComponent } from './components/locations/locations.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { MerchantsComponent } from './components/merchants/merchants.component';
import { SubscriptionPlansComponent } from './components/subscription-plans/subscription-plans.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { UsersComponent } from './components/users/users.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';

import { AuthGuard } from '../../business/auth.guard';

const routes: Routes = [
  { path: '', component: YmsComponent, canActivate: [AuthGuard] },
  { path: 'vendors', title: 'Vendors', component: VendorsComponent, canActivate: [AuthGuard] },

  { path: 'invoices', title: 'Invoices', component: InvoicesComponent, canActivate: [AuthGuard]  },
  { path: 'invoices/new', title: 'New Invoice', component: NewInvoiceComponent, canActivate: [AuthGuard] },
  { path: 'merchants',  title: 'Merchants', component: MerchantsComponent, canActivate: [AuthGuard]  },

  { path: 'locations',  title: 'Locations', component: LocationsComponent, canActivate: [AuthGuard]  },
  { path: 'locations/new', title: 'New Location', component: NewLocationComponent, canActivate: [AuthGuard]  },
  { path: 'locations/edit/:id', title: 'Edit Location', component: EditLocationComponent, canActivate: [AuthGuard]  },


  { path: 'subscriptions', title: 'Subscription Plans', component: SubscriptionPlansComponent, canActivate: [AuthGuard]  },
  { path: 'subscriptions/new', title: 'New Subscription Plan', component: NewSubscriptionPlanComponent, canActivate: [AuthGuard]  },


  { path: 'users', title: 'Users', component: UsersComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YmsRoutingModule { }
