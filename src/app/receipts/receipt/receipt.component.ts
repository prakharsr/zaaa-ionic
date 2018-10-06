
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';
import { PaymentReceipt } from '../payment-receipt';
import { Invoice, InvoiceDir, InvoiceApiService } from 'app/invoice';
import { MediaHouse, Client, Executive } from 'app/directory';
import { ReceiptsApiService } from '../receipts-api.service';
import { NotificationService, OptionsService, DialogService, WindowService } from 'app/services';
import { SelectInvoiceComponent } from '../select-invoice/select-invoice.component';
import { PreviewComponent } from '../../components/preview/preview.component';
import { SocialSharing } from '@ionic-native/social-sharing';

declare var cordova:any;

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

  submitting = false;
  submitted = false;

  pastReceipts: PaymentReceipt[] = [];

  @Output() invoiceSelected = new EventEmitter();

  @Input() set invoiceDir(invoiceDir: InvoiceDir) {
    if (invoiceDir) {
      this.init(invoiceDir);
    }
  }

  init(invoiceDir: InvoiceDir) {
    this.invoiceSelected.emit();

    this.invoice = invoiceDir.invoice;
    this.mediaHouse = invoiceDir.mediaHouse;
    this.client = invoiceDir.client;
    this.executive = invoiceDir.executive;
    this.receipt.invoiceID = this.invoice.id;

    this.receipt.paymentType = this.paymentTypes[0];
    this.receipt.paymentAmount = this.invoice.pendingAmount;

    this.invoiceApi.getPayedReceipts(this.invoice).subscribe(data => this.pastReceipts = data);
  }

  ngOnInit() {
      }

  constructor(  private router: Router,
    private api: ReceiptsApiService,
    private invoiceApi: InvoiceApiService,
    private notifications: NotificationService,
    private options: OptionsService,
    private dialog: DialogService,
    private windowService: WindowService,
    private socialSharing: SocialSharing) { }

  submit () : Observable<any> {

    this.submitting = true;

    this.presave()
    return this.createReceipt();

  }

  private presave() {
    this.receipt.paymentAmountWords = this.options.amountToWords(this.receipt.paymentAmount);
  }

  save() {
    this.submit().subscribe(data => {
      if (data.success) {
        this.goBack();
      }
      else this.submitting = false;
    });
  }

  saveAndGen() {
    this.confirmGeneration().subscribe(confirm=> {
      if(confirm) {
        this.submit().subscribe(data => {
          if (data.success) {
            this.gen(this.receipt);
          }
          else this.submitting = false;
        });
      }
    });
  }

  saveAndSendMsg() {
    this.confirmGeneration().subscribe(confirm => {
      if(confirm) {
        this.submit().subscribe(data => {
          if (data.success) {
            this.sendMsg(this.receipt);
          }
          else this.submitting = false;
        });
      }
    });
  }

  saveAndShare() {
    this.confirmGeneration().subscribe(confirm=> {
      if(confirm) {
        this.submit().subscribe(data => {
          if (data.success) {
            this.sharePdf(this.receipt);
          }
          else this.submitting = false;
        });
      }
    });
  }

  genPreview() {
    this.presave();
    this.api.previewReceipthtml(this.receipt).subscribe(data => {
      this.dialog.show(PreviewComponent, { data: data.content }).subscribe(response => {
        switch (response) {
          case 'save':
            this.save();
            break;

          case 'dl':
            this.saveAndGen();
            break;

          case 'mail':
            this.saveAndSendMsg();
            break;

          case 'share':
            this.saveAndShare();
            break;
        }
      });
    });
  }

  private createReceipt() {
    return this.api.createReceipt(this.receipt).pipe(
      map(data => {
        if (data.success) {
          this.receipt.id = data.msg;
        }
        else {
          this.notifications.show(data.msg);
        }

        return data;
      })
    );
  }

  gen(receipt: PaymentReceipt, share = false, callback?: () => void) {
    this.api.createReceipt(receipt).subscribe(data => {
      if (data.msg) {
        this.notifications.show(data.msg);
      }
      else {
        document.addEventListener('deviceready', () => {
          console.log(cordova.file);

        let folderpath = cordova.file.externalRootDirectory + "Download/";
        let filename = "receipt.pdf";
       
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
                    this.notifications.show('Saved receipt.pdf in Download ');
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

  sharePdf(receipt: PaymentReceipt) {
    this.gen(receipt, true, () => {
      this.socialSharing.share('Share Receipt PDF', 'Share', cordova.file.externalRootDirectory + "Download/receipt.pdf");
    });

  }


  sendMsg(receipt: PaymentReceipt) {
    this.dialog.getMailingDetails().subscribe(mailingDetails => {
      if (mailingDetails) {
        this.api.sendMail(receipt, mailingDetails).subscribe(data => {
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

  handleSubmit(valid: boolean, callbackName: string) {
    if (valid) {
      switch (callbackName) {
        case 'save':
          this.save();
          break;
        
        case 'dl':
          this.saveAndGen();
          break;
        
        case 'preview':
          this.genPreview();
          break;

        case 'mail':
          this.saveAndSendMsg();
          break;
        case 'share':
          this.saveAndShare();
          break;
      }
    }
    else this.notifications.show('Fix errors before submitting');
  }

  private confirmGeneration() : Observable<boolean> {

    return this.dialog.showYesNo('Confirm Generation', "Payment Receipt will be generated. Once generated it cannot be edited or deleted. Are you sure you want to continue?");
  }

  private goBack() {
    this.router.navigateByUrl('/receipts');
  }

  cancel() {
    this.goBack();
  }

  paymentTypes = ['Cash', 'Cheque', 'NEFT', 'Debit Note'];

  selectInvoice() {
    this.dialog.show(SelectInvoiceComponent).subscribe((data: Invoice) => {
      if (data) {
        this.invoiceApi.getInvoiceDir(data.id).subscribe(dir => {
          this.init(dir);
        });
      }
    });
  }

  round2(num: number) {
    return Math.round(num * 100) / 100
  }
}
