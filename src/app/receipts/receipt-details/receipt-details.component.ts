import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentReceipt } from '@aaman/receipts/payment-receipt';
import { ReceiptsApiService } from '@aaman/receipts/receipts-api.service';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  
})
export class ReceiptDetailsComponent implements OnInit {

  receipt = new PaymentReceipt();

  constructor(public goback: GobackService, private api: ReceiptsApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { receipt: PaymentReceipt }) => {
      this.receipt = data.receipt;
    });
  }

}
