import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactDetailsComponent } from './register/component/contact-details/contact-details.component';
import { AddressDetailsComponent } from './register/component/address-details/address-details.component';
import { AccountSetupComponent } from './register/component/account-setup/account-setup.component';
import { LoadFundsComponent } from './register/component/load-funds/load-funds.component';
import { FinalDetailsComponent } from './register/component/final-details/final-details.component';
import { ConfirmDetailsComponent } from './register/component/confirm-details/confirm-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: RegisterComponent,
    children: [
      {
        path: 'contact-details',
        component: ContactDetailsComponent,
      },
      {
        path: 'address-details',
        component: AddressDetailsComponent,
      },
      {
        path: 'account-setup',
        component: AccountSetupComponent,
      },
      {
        path: 'load-funds',
        component: LoadFundsComponent,
      },
      {
        path: 'final-details',
        component: FinalDetailsComponent,
      },
      {
        path: 'confirm-details',
        component: ConfirmDetailsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
