import { GobackService } from 'app/services';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MailingDetails } from 'app/models';

@Component({
  selector: 'app-mailing-details',
  templateUrl: './mailing-details.component.html',
  
})
export class MailingDetailsComponent implements OnInit {

  details = new MailingDetails();

  constructor(public goback: GobackService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.goback.urlInit();
    this.details.to = this.data.to;
  }
}
