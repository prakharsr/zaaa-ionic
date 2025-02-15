import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentReceipt, AdvanceReceipt } from '../payment-receipt';
import { Invoice } from 'app/invoice';
import { ReceiptsApiService } from '../receipts-api.service';
import { NotificationService } from 'app/services';
import { PageData } from 'app/models';
import { ReleaseOrderSearchParams } from 'app/release-order';

@Component({
  selector: 'app-link-advance',
  templateUrl: './link-advance.component.html',
  
})
export class LinkAdvanceComponent implements OnInit {

  receipts: PaymentReceipt[] = [];
  invoice = new Invoice();

  page: number;
  pageCount: number;

  constructor(private route: ActivatedRoute,
    private api: ReceiptsApiService,
    private router: Router,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { resolved: { list: PageData<PaymentReceipt>, search: ReleaseOrderSearchParams }, invoice: Invoice }) => {
      this.receipts = data.resolved.list.list;
      this.invoice = data.invoice;

      this.page = data.resolved.list.page;
      this.pageCount = data.resolved.list.pageCount;
    });
  }

  link(receipt: AdvanceReceipt) {
    this.api.link(this.invoice, receipt).subscribe(data => {
      if (data.success) {
        this.router.navigateByUrl('/invoices');
      }
      else {
        this.notifications.show(data.msg);
      }
    });
  }

  navigate(i: number) {
    this.router.navigate(['/receipts/advance/link', this.invoice.id, i]);
  }
}
