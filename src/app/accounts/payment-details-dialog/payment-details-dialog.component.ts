import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';

export class PaymentDetails {
  paymentType = "Cash";
  paymentDate = "";
  paymentNo = "";
  paymentAmount = 0;
  paymentBankName = "";
}

@Component({
  selector: 'app-payment-details-dialog',
  templateUrl: './payment-details-dialog.component.html',
  
})
export class PaymentDetailsDialogComponent implements OnInit {

  details = new PaymentDetails();

  paymentTypes = ['Cash', 'Credit', 'Cheque', 'NEFT'];

  constructor(public goback: GobackService, ) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
