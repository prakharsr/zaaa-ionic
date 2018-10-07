
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentReceipt } from '../payment-receipt';
import { ReceiptsApiService } from '../receipts-api.service';
import * as receiptGen from '../receipt-gen';
import { NotificationService, DialogService, WindowService } from 'app/services';
import { SocialSharing } from '@ionic-native/social-sharing';

declare var cordova:any;

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  
})
export class ReceiptDetailsComponent implements OnInit {

  receipt = new PaymentReceipt();

  constructor(  private api: ReceiptsApiService,
    private route: ActivatedRoute,
    private notifications: NotificationService,
    private dialog: DialogService,
    private windowService: WindowService,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
     
    this.route.data.subscribe((data: { receipt: PaymentReceipt }) => {
      this.receipt = data.receipt;
    });
  }

  gen(share = false, callback?: () => void) {
    this.api.generate(this.receipt).subscribe(data => {
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

  sendMsg() {
    this.dialog.getMailingDetails().subscribe(mailingDetails => {
      if (mailingDetails) {
        this.api.sendMail(this.receipt, mailingDetails).subscribe(data => {
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

  cancel() {
    
  this.dialog.showYesNo("Confirm Cancellation", "Do you want to cancel this Receipt? This cannot be undone.").subscribe(confirm => {
    if (confirm) {
      this.api.cancel(this.receipt).subscribe(data => {
        if (data.success) {
          this.notifications.show('Cancelled');
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      });
    }
  });
  }

  share() {
    this.gen(true, () => {
      this.socialSharing.share('Share Receipt PDF', 'Share', cordova.file.externalRootDirectory + "Download/receipt.pdf");
    });
  }
}
