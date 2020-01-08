import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  addressForm: FormGroup;
  addressSubmitted: boolean = false;
  countryName :any;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private commonService: CommonService) {
    this.bindAddressForm();
  }

  ngOnInit() {
    this.getCountry();
  }
  get adresForm() {
    return this.addressForm.controls
  }
  bindAddressForm() {
    this.addressForm = this.fb.group({
      address1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s,'-]*$/)]],
      address2: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s,'-]*$/)]],
      state: [''],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)]],
      zipcode: ['', [Validators.required, Validators.pattern(/(^\d{5}$)|(^\d{5}-\d{4}$)/)]],
    });
  }
  addressDetailsForm() {
    if (this.addressForm.valid) {
      this.addressSubmitted = true;
      this.commonService.resetStages();
      this.commonService.IsAccountDetails = true;
      this.commonService.registerObj = {
        "registeration_data": {
          firstName: this.commonService.registerObj.registeration_data.firstName,
          middleName: this.commonService.registerObj.registeration_data.middleName,
          lastName: this.commonService.registerObj.registeration_data.lastName,
          email: this.commonService.registerObj.registeration_data.email,
          phone: this.commonService.registerObj.registeration_data.phone,
          emailAlert: this.commonService.registerObj.registeration_data.emailAlert,
          textAlert: this.commonService.registerObj.registeration_data.textAlert,
          address1: this.addressForm.controls.address1.value,
          address2: this.addressForm.controls.address2.value,
          city: this.addressForm.controls.city.value,
          state: this.addressForm.controls.state.value,
          zipcode: this.addressForm.controls.zipcode.value,
          ssn: 0,
          dob: Date,
          password: '',
          is_fundstransfer: false,
          is_roundup: false,
          isTerms: false,
          bankinginst: '',
          cardamount: ''
        }
      }
      this.commonService.postregisterForm(this.commonService.registerObj).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/account-setup', { relativeTo: this.route });
      },
        err => {
          console.log("error");
        });  
     
    }
  }
  backtoContact() {
    this.commonService.resetStages();
    this.commonService.IsContactDetails = true;
    this.router.navigateByUrl('/', { relativeTo: this.route });
  }
  getCountry() {
    this.commonService.getcountryInfo().subscribe(res => {
      console.log(res);
      this.countryName = res;
    },
      err => {
        console.log("error");
      });
  }
}
