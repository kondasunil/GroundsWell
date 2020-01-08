import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>; 
  
 
  IsCashFeeContent: boolean = false;
 
 


  constructor(private fb: FormBuilder, private commonService: CommonService, private router: Router) {
   
  }

  ngOnInit() {
    let currentUrl = this.router.url;
    console.log(currentUrl);
    if (currentUrl == '/') { this.resetStages(); this.commonService.IsContactDetails = true }
    if (currentUrl == '/address-details') { this.resetStages(); this.commonService.IsAddressDetails = true }
    if (currentUrl == '/account-setup') { this.resetStages(); this.commonService.IsAccountDetails = true }
    if (currentUrl == '/load-funds') { this.resetStages(); this.commonService.IsFundsDetails = true }
    if (currentUrl == '/final-details') { this.resetStages(); this.commonService.IsComfirmDetails = true }
    if (currentUrl == '/confirm-details') { this.resetStages(); this.commonService.IsFinalDetails = true }
  

  }
  resetStages() {
    this.commonService.IsContactDetails = false;
    this.commonService.IsAddressDetails = false
    this.commonService.IsAccountDetails = false
    this.commonService.IsFundsDetails = false
    this.commonService.IsComfirmDetails = false
    this.commonService.IsFinalDetails = false 
  }
  
 
  Model(type) {
    if (type === 'CashFee') {
      this.IsCashFeeContent = true;
    }

  }
  closeModel() {
    this.IsCashFeeContent = false;
  }
 

}
