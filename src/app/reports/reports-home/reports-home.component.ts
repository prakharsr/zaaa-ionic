import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ReportsApiService } from '../reports-api.service';
import { Observable } from 'rxjs/Observable';
import { NotificationService, WindowService } from 'app/services';

@Component({
  selector: 'app-reports-home',
  templateUrl: './reports-home.component.html',
  
})
export class ReportsHomeComponent implements OnInit {

  creationPeriod = 0;
  updationPeriod = 0;
  insertionPeriod = 0;

  constructor(public goback: GobackService, private api: ReportsApiService,
    private notifications: NotificationService,
    private windowService: WindowService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

  private download(base: Observable<any>) {
    base.subscribe(data => {
      if (data.msg) {
        this.notifications.show(data.msg);
      }
      else {
        console.log(data);
        
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        let url = this.windowService.window.URL.createObjectURL(blob);

        let a = this.windowService.window.document.createElement('a');
        a.setAttribute('style', 'display:none;');
        this.windowService.window.document.body.appendChild(a);
        a.download = 'report.xlsx';
        a.href = url;
        a.click();
      }
    });
  }

  mediaHouse() {
    this.download(this.api.mediaHouseReport(this.creationPeriod, this.updationPeriod));
  }

  client() {
    this.download(this.api.clientReport(this.creationPeriod, this.updationPeriod));
  }

  executive() {
    this.download(this.api.executiveReport(this.creationPeriod, this.updationPeriod));
  }

  invoice() {
    this.download(this.api.invoiceReport(this.creationPeriod, this.updationPeriod));
  }

  ro() {
    this.download(this.api.releaseOrderReport(this.creationPeriod, this.updationPeriod));
  }

  receipt() {
    this.download(this.api.receiptReport(this.creationPeriod, this.updationPeriod));
  }

  mhi() {
    this.download(this.api.mediaHouseInvoiceReport(this.creationPeriod, this.updationPeriod));
  }

  mhNote() {
    this.download(this.api.mediaHouseNotesReport(this.creationPeriod, this.updationPeriod));
  }

  clientNote() {
    this.download(this.api.clientNotesReport(this.creationPeriod, this.updationPeriod));
  }

  ratecard() {
    this.download(this.api.ratecardReport(this.creationPeriod, this.updationPeriod));
  }

  insertions() {
    this.download(this.api.insertionsReport(this.creationPeriod, this.updationPeriod, this.insertionPeriod));
  }
}