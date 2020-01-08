import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  IsContactDetails: boolean = true;
  IsAddressDetails: boolean = false;
  IsAccountDetails: boolean = false;
  IsFundsDetails: boolean = false;
  IsComfirmDetails: boolean = false;
  IsFinalDetails: boolean = false;
  IsTransfer: boolean = false;
  registerObj: any = {
    "registeration_data": {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: 0,
    emailAlert: '',
      textAlert: '',
      address1: '',
      address2: '',
    city: '',
    state: '',
    zipcode: '',
    ssn: 0,
    dob: Date,
    password: '',
    is_fundstransfer: false,
    is_roundup: false,
    isTerms: false,
      contribution: 0,
      bankinginst: '',
      cardamount: 0
    }
  } 
  constructor(private http: HttpClient) { }

  resetStages() {
    this.IsContactDetails = false;
    this.IsAddressDetails = false
    this.IsAccountDetails = false
    this.IsFundsDetails = false
    this.IsComfirmDetails = false
    this.IsFinalDetails = false
  }

  getcountryInfo() {
    return this.http.get(`${environment.apiUrl}/register/states/`);
  }
  postregisterForm(data) {
    return this.http.post(`${environment.apiUrl}/register/signup/`,data);
  }
}
