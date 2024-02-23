import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/404', pathMatch: 'full' },
  
  { path: 'personal', title: 'Thrive-Personal', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule) },
  { path: 'business', title: 'Thrive-Admin', loadChildren: () => import('./business/business.module').then(m => m.BusinessModule) },

  { path: '404', title: 'Error', component: ErrorComponent },
  { path: '**', title: 'Error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
