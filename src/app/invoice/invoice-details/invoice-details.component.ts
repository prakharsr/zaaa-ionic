import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  
})
export class InvoiceDetailsComponent implements OnInit {

  invoice = new Invoice();

  constructor(public goback: GobackService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { invoice: Invoice }) => {
      this.invoice = data.invoice;
    });
  }

  toDate(date: NgbDate) {
    return new Date(date.year, date.month - 1, date.day);
  }

  get taxDisplay() {
    let tax = this.invoice.taxAmount.primary + "%";

    if (this.invoice.taxAmount.secondary != 0) {
      tax += " + " + this.invoice.taxAmount.secondary + "%"
    }

    if (this.invoice.taxType) {
      tax += " (" + this.invoice.taxType + ") ";
    }

    return tax + (this.invoice.taxIncluded ? " Included" : " Excluded");
  }
}