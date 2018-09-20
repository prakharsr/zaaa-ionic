import { PaymentReceipt } from "./payment-receipt";
import { ReceiptsApiService } from "./receipts-api.service";
import { NotificationService, DialogService } from "../services";

declare var cordova:any;

export function generate(receipt: PaymentReceipt,
  api: ReceiptsApiService,
  notifications: NotificationService, share = false,
  callback?) {
  
  api.generate(receipt).subscribe(data => {
    if (data.msg) {
      notifications.show(data.msg);
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

export function sharePdf(receipt: PaymentReceipt,
  api: ReceiptsApiService,
  notifications: NotificationService, share = false,
  callback?) {
  
    generate(receipt,api, notifications, true, () => {
      this.socialSharing.share('Share Receipt PDF', 'Share', cordova.file.externalRootDirectory + "Download/receipt.pdf");
    });
}

export function sendMsg(receipt: PaymentReceipt,
  api: ReceiptsApiService,
  notifications: NotificationService,
  dialog: DialogService,
  callback?) {

  dialog.getMailingDetails().subscribe(mailingDetails => {
    if (mailingDetails) {
      api.sendMail(receipt, mailingDetails).subscribe(data => {
        if (data.success) {
          notifications.show("Sent Successfully");

          if (callback) {
            callback();
          }
        }
        else {
          console.log(data);

          notifications.show(data.msg);
        }
      });
    }
  });
}

export function cancel(receipt: PaymentReceipt,
  api: ReceiptsApiService,
  notifications: NotificationService,
  dialog: DialogService,) {

  dialog.showYesNo("Confirm Cancellation", "Do you want to cancel this Receipt? This cannot be undone.").subscribe(confirm => {
    if (confirm) {
      api.cancel(receipt).subscribe(data => {
        if (data.success) {
          notifications.show('Cancelled');
        }
        else {
          console.log(data);

          notifications.show(data.msg);
        }
      });
    }
  });
}