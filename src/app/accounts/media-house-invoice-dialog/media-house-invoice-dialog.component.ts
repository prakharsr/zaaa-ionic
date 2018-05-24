import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { MediaHouseInvoice } from '../media-house-invoice';

@Component({
  selector: 'app-media-house-invoice-dialog',
  templateUrl: './media-house-invoice-dialog.component.html',
  
})
export class MediaHouseInvoiceDialogComponent implements OnInit {

  details = new MediaHouseInvoice();

  constructor(public goback: GobackService, ) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
