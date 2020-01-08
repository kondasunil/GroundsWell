import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-load-funds',
  templateUrl: './load-funds.component.html',
  styleUrls: ['./load-funds.component.scss']
})
export class LoadFundsComponent implements OnInit {
  fundsForm: FormGroup;
  fundsSubmitted: boolean = false;
 
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private commonService: CommonService) {
    this.bindFundsForm();
  }

  ngOnInit() {
  }
  get fundForm() {
    return this.fundsForm.controls
  }
  bindFundsForm() {
    this.fundsForm = this.fb.group({
      is_roundup: [],
      is_fundstransfer: [],
      cardamount:[]
    });
  }
  fundtransfer(e) {
    if (this.commonService.registerObj.registeration_data.is_fundstransfer === true) {
      this.commonService.IsTransfer = true;
    }
    else {
      this.commonService.IsTransfer = false;
    }
  }
  FundForm() {
    if (this.fundsForm.valid) {
      this.fundsSubmitted = true;
      this.commonService.resetStages();
      this.commonService.IsComfirmDetails = true;
      this.commonService.registerObj = {
        "registeration_data": {
          firstName: this.commonService.registerObj.registeration_data.firstName,
          middleName: this.commonService.registerObj.registeration_data.middleName,
          lastName: this.commonService.registerObj.registeration_data.lastName,
          email: this.commonService.registerObj.registeration_data.email,
          phone: this.commonService.registerObj.registeration_data.phone,
          emailAlert: this.commonService.registerObj.registeration_data.emailAlert,
          textAlert: this.commonService.registerObj.registeration_data.textAlert,
          address1: this.commonService.registerObj.registeration_data.address1,
          address2: this.commonService.registerObj.registeration_data.address2,
          city: this.commonService.registerObj.registeration_data.city,
          state: this.commonService.registerObj.registeration_data.state,
          zipcode: this.commonService.registerObj.registeration_data.zipcode,
          ssn: this.commonService.registerObj.registeration_data.ssn,
          dob: this.commonService.registerObj.registeration_data.dob,
          password: this.commonService.registerObj.registeration_data.password,
          is_fundstransfer: this.commonService.registerObj.registeration_data.is_fundstransfer,
          is_roundup: this.commonService.registerObj.registeration_data.is_roundup,
          isTerms: this.commonService.registerObj.registeration_data.isTerms,
          bankinginst: '',
          cardamount: this.commonService.registerObj.registeration_data.cardamount
        }
      }
      this.commonService.postregisterForm(this.commonService.registerObj).subscribe(res => {
        this.router.navigateByUrl('/confirm-details', { relativeTo: this.route });
      },
        err => {
          console.log("error");
        });
     
    }    
  } 
  backtoAccount() {
    this.commonService.resetStages();
    this.commonService.IsAccountDetails = true;
    this.router.navigateByUrl('/account-setup', { relativeTo: this.route });
  }
}
