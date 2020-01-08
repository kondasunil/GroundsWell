import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaskPipe } from './shared/directive/ssn-mask-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDetailsComponent } from './register/component/contact-details/contact-details.component';
import { AddressDetailsComponent } from './register/component/address-details/address-details.component';
import { AccountSetupComponent } from './register/component/account-setup/account-setup.component';
import { LoadFundsComponent } from './register/component/load-funds/load-funds.component';
import { ConfirmDetailsComponent } from './register/component/confirm-details/confirm-details.component';
import { FinalDetailsComponent } from './register/component/final-details/final-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MaskPipe,
    ContactDetailsComponent,
    AddressDetailsComponent,
    AccountSetupComponent,
    LoadFundsComponent,
    ConfirmDetailsComponent,
    FinalDetailsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
