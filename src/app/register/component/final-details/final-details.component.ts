import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-final-details',
  templateUrl: './final-details.component.html',
  styleUrls: ['./final-details.component.scss']
})
export class FinalDetailsComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

}
