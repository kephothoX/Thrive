import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business.component';

import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [

  { path: '', title: 'Business', component: BusinessComponent },
  { path: 'login', title: 'Authentication & Authorization', component: AuthComponent },
  
  { path: 'byn', loadChildren: () => import('./byn/byn.module').then(m => m.BynModule) },
  { path: 'yms', loadChildren: () => import('./yms/yms.module').then(m => m.YmsModule) },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
