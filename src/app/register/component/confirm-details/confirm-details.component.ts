import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.scss']
})
export class ConfirmDetailsComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
  }
  editForm(type) {
    switch (type) {
      case 'Content':
        this.commonService.resetStages();
        this.commonService.IsContactDetails = true;
        break;
      case 'Funds':
        this.commonService.resetStages();
        this.commonService.registerObj.is_fundstransfer = true;
        this.commonService.IsTransfer = true;
        this.commonService.IsFundsDetails = true;
        break;
      case 'RoundupFunds':
        this.commonService.resetStages();
        this.commonService.IsFundsDetails = true;
        break;
      case 'Accounts':
        this.commonService.resetStages();
        this.commonService.IsAccountDetails = true;
        break;
    }
  }
  confirmDetails() {
    this.commonService.resetStages();
    this.commonService.IsFinalDetails = true;
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
      this.router.navigateByUrl('/final-details', { relativeTo: this.route });
    },
      err => {
        console.log("error");
      });
   
  }
}
