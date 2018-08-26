import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceDir } from '../../invoice';

@Component({
  selector: 'app-create-receipt',
  templateUrl: './create-receipt.component.html',
  
})
export class CreateReceiptComponent implements OnInit {

  advance = false;
  invoiceDir: InvoiceDir;

  allowAdvance = true;

  constructor(public goback: GobackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { advance: boolean, resolved: InvoiceDir }) => {
      this.advance = data.advance;
      this.invoiceDir = data.resolved;
    });
  }

}
