import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { Address } from '@aaman/main/address';
import { StateApiService } from '@aaman/main/state-api.service';

export class BillingDetails {
  firmName: string;
  billingAddress = new Address();
  GSTIN = {
    GSTType: 'URD',
    GSTNo: ""
  }
}

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  
})
export class BillingDetailsComponent implements OnInit {

  details = new BillingDetails();
  
  constructor(public goback: GobackService, public stateApi: StateApiService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
