import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from '../../../shared/directive/match-value-validation';
import { CommonService } from '../../../shared/common.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss']
})
export class AccountSetupComponent implements OnInit {
  accountForm: FormGroup;
  accountSubmitted: boolean = false;
  
  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.bindAccountForm();
  }

  ngOnInit() {
    this.commonService.registerObj.registeration_data.dob = new Date();
  }
  get accountsForm() {
    return this.accountForm.controls
  }
  bindAccountForm() {
    this.accountForm = this.fb.group({
      dob: ['', [Validators.required]],
      password: ['', [Validators.required]],
      resetPassword: ['', [Validators.required]],
      isTerms: ['', Validators.required],
      ssn: ['', Validators.required ]
    },
      { validator: MustMatch('password', 'resetPassword') }
    );
  }
  accountDetailsForm() {
    if (this.accountForm.valid) {
      this.accountSubmitted = true;
      this.commonService.resetStages();
      this.commonService.IsFundsDetails = true;
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
          ssn: this.accountForm.controls.ssn.value,
          dob: this.datePipe.transform(this.commonService.registerObj.registeration_data.dob,"dd-MM-yyyy"),
          password: this.accountForm.controls.password.value,
          is_fundstransfer: false,
          is_roundup: false,
          isTerms: false,
          bankinginst: '',
          cardamount: ''
        }
      }
      if (this.accountForm.controls.isTerms.value == 'isTerms') {
        this.commonService.registerObj.registeration_data.isTerms = true
      }
      this.commonService.postregisterForm(this.commonService.registerObj).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/load-funds', { relativeTo: this.route });
      },
        err => {
          console.log("error");
        });
      
    }
    
  }
  backtoAddress() {
    this.commonService.resetStages();
    this.commonService.IsAddressDetails = true;
    this.router.navigateByUrl('/address-details', { relativeTo: this.route });
  }
}
