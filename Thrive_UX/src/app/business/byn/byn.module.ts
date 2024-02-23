import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


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

import { HeaderComponent } from './components/header/header.component';
import { BynRoutingModule } from './byn-routing.module';
import { BynComponent } from './byn.component';


@NgModule({
  declarations: [
    BynComponent,
    HeaderComponent,
    LocationsComponent,
    VendorsComponent,
    MerchantsComponent,
    SubscriptionPlansComponent,
    InvoicesComponent,
    NewVendorComponent,
    EditVendorComponent,
    EditLocationComponent,
    NewLocationComponent,
    NewSubscriptionPlanComponent,
    NewInvoiceComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    BynRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatStepperModule,
    MatDividerModule,
    DragDropModule,
    OverlayModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,

  ]
})
export class BynModule { }
