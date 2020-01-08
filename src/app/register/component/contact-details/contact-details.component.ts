import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  nameValidation = 0;
  registerForm: FormGroup;
  submitted: Boolean = false;
  IsNameErrorMsg: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private commonService: CommonService) {
    this.bindRegistrationForm();
  }

  ngOnInit() {

  }
  get regForm() {
    return this.registerForm.controls
  }
  namevalidations() {
    this.nameValidation = this.registerForm.value.firstName.length + this.registerForm.value.middleName.length + this.registerForm.value.lastName.length;
    if (this.nameValidation > 23) {
      this.IsNameErrorMsg = true;
    }
    else {
      this.IsNameErrorMsg = false;
    }
  }
  bindRegistrationForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      middleName: [],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      alert: ['', Validators.required]
    });
  }
  contactDetailsForm() {
    if (this.registerForm.valid) {
      this.submitted = true;
      this.commonService.resetStages();
      this.commonService.IsAddressDetails = true;
      this.commonService.registerObj = {
        "registeration_data": {
          firstName: this.registerForm.controls.firstName.value,
          middleName: this.registerForm.controls.middleName.value,
          lastName: this.registerForm.controls.lastName.value,
          email: this.registerForm.controls.email.value,
          phone: this.registerForm.controls.phone.value,
          emailAlert: false,
          textAlert: false,         
          address: '',
          city: '',
          state: '',
          zipcode: '',
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
      if (this.registerForm.controls.alert.value == 'emailAlert') {
        this.commonService.registerObj.registeration_data.emailAlert = true
      }
      else if (this.registerForm.controls.alert.value == 'textAlert') {
        this.commonService.registerObj.registeration_data.textAlert = true
      }
      this.commonService.postregisterForm(this.commonService.registerObj).subscribe(res => {
        this.router.navigateByUrl('/address-details', { relativeTo: this.route });
      },
        err => {
          console.log("error");
        });      
    }
  }
  phoneNoMask(e) {
    document.getElementById('mobile').addEventListener('input', function (e) {
      var x = e.target['value'].replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target['value'] = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }
}
