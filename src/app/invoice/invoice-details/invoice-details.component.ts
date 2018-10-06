
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { Invoice } from '../invoice';
import { PaymentReceipt } from 'app/receipts';
import { InvoiceApiService } from '../invoice-api.service';
import { NotificationService, DialogService, WindowService } from '../../services';
import { SocialSharing } from '@ionic-native/social-sharing';

declare var cordova:any;

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  
})
export class InvoiceDetailsComponent implements OnInit {

  invoice = new Invoice();

  receipts: PaymentReceipt[] = [];

  constructor(  private route: ActivatedRoute,    private socialSharing: SocialSharing,  private windowService: WindowService,
    private api: InvoiceApiService, private notifications: NotificationService, private dialog: DialogService, private router: Router) { }

    ngOnInit() {
      this.route.data.subscribe((data: { invoice: Invoice }) => {
        this.invoice = data.invoice;
      });
  
      this.api.getPayedReceipts(this.invoice).subscribe(data => this.receipts = data);
    }
  
    toDate(date: NgbDate) {
      return new Date(date.year, date.month - 1, date.day);
    }

  gen(invoice: Invoice, share=false, callback?: () => void) {
    this.api.generate(invoice).subscribe(data => {
      if (data.msg) {
        this.notifications.show(data.msg);
      }
      else {
        document.addEventListener('deviceready', () => {
          console.log(cordova.file);

        let folderpath = cordova.file.externalRootDirectory + "Download/";
        let filename = "invoice.pdf";
       
        this.windowService.window.resolveLocalFileSystemURL(folderpath, dir => {
          console.log("Access to the directory granted succesfully");
          dir.getFile(filename, {create:true}, file => {
              console.log("File created succesfully.");
              file.createWriter(fileWriter => {
                  console.log("Writing content to file");
                  fileWriter.write(data);
                  if(callback) {
                    callback();
                  }
                  if(share == false) {
                    this.notifications.show('Saved invoice.pdf in Download ');
                  }
              }, confirm => {
                  if(share == false) {
                    this.notifications.show('Unable to save file in path '+ folderpath);
                  }
                  else {
                    this.notifications.show('Unable to share file due to being unable to save file in path '+ folderpath);
                  }
                });
              });
          });
        });
      }
    });
  }

  sharePdf(invoice: Invoice) {
    this.gen(invoice, true, () => {
      this.socialSharing.share('Share Invoice PDF', 'Share', cordova.file.externalRootDirectory + "Download/invoice.pdf");
    });
  }

  sendMsg(invoice: Invoice) {
    this.dialog.getMailingDetails().subscribe(mailingDetails => {
      if (mailingDetails) {
        this.api.sendMail(invoice, mailingDetails).subscribe(data => {
          if (data.success) {
            this.notifications.show("Sent Successfully");
          }
          else {
            console.log(data);

            this.notifications.show(data.msg);
          }
        });
      }
    });
  }

  createPaymentReceipt(invoice: Invoice) {
    if (invoice.pendingAmount <= 0) {
      this.notifications.show('All Payments have been completed for this Invoice');

      return;
    }

    this.router.navigate(['/receipts/new', invoice.id]);
  }

  linkAdvanceReceipt(invoice: Invoice) {
    if (invoice.pendingAmount <= 0) {
      this.notifications.show('All Payments have been completed for this Invoice');

      return;
    }

    this.router.navigate(['/receipts/advance/link', invoice.id]);
  }

  getInsertionStateText(state: number) {
    switch (state) {
      case 1:
        return 'Not Published';

      case 2:
        return 'Published';

      case 3:
        return 'Disputed';
    }
  }

  get taxDisplay() {
    let tax = this.invoice.taxAmount.primary + "%";

    if (this.invoice.taxAmount.secondary != 0) {
      tax += " + " + this.invoice.taxAmount.secondary + "%"
    }

    if (this.invoice.taxType) {
      tax += " (" + this.invoice.taxType + ") ";
    }

    return tax + (this.invoice.taxIncluded ? " Included" : "");
  }
}
