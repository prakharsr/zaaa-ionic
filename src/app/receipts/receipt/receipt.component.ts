import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentReceipt } from '../payment-receipt';
import { Invoice, InvoiceDir } from 'app/invoice';
import { MediaHouse, Client, Executive } from 'app/directory';
import { ReceiptsApiService } from '../receipts-api.service';
import { NotificationService, OptionsService } from 'app/services';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  
})
export class ReceiptComponent implements OnInit {

  receipt = new PaymentReceipt();
  invoice: Invoice;
  mediaHouse: MediaHouse;
  client: Client;
  executive: Executive;

  constructor(public goback: GobackService, private route: ActivatedRoute,
    private router: Router,
    private api: ReceiptsApiService,
    private notifications: NotificationService,
    private options: OptionsService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { resolved: InvoiceDir }) => {
      this.invoice = data.resolved.invoice;
      this.mediaHouse = data.resolved.mediaHouse;
      this.client = data.resolved.client;
      this.executive = data.resolved.executive;
      this.receipt.invoiceID = this.invoice.id;

      this.receipt.paymentType = this.paymentTypes[0];
      this.receipt.paymentAmount = this.invoice.pendingAmount;
    });
  }

  submit () {
    this.receipt.paymentAmountWords = this.options.amountToWords(this.receipt.paymentAmount);

    this.api.createReceipt(this.receipt).subscribe(data => {
      if (data.success) {
        this.goBack();
      }
      else {
        console.log(data);

        this.notifications.show(data.msg);
      }
    });
  }

  private goBack() {
    this.router.navigateByUrl('/receipts');
  }

  cancel() {
    this.goBack();
  }

  paymentTypes = ['Cash', 'Credit', 'Cheque', 'NEFT'];
}