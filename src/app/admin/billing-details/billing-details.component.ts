import { Component, OnInit, Input, Output, EventEmitter, Renderer } from '@angular/core';
import { Address } from '../../models/address';
import { StateApiService } from '../../services/state-api.service';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  // styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {

  firmName: string;
  billingAddress = new Address();
  gstNo: string;
  
  @Output() done = new EventEmitter();

  error: string;

  constructor(
    private goback: GobackService, public stateApi: StateApiService) {
     }

  ngOnInit() {
    this.goback.urlInit();
  }

  submit() {
    this.done.emit({
      firmName: this.firmName,
      billingAddress: this.billingAddress,
      gstNo: this.gstNo
    })
  }

}
