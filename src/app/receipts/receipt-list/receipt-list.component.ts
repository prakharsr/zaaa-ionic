
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { PaymentReceipt } from '../payment-receipt';
import { NotificationService, DialogService, WindowService } from 'app/services';
import { ReceiptsApiService } from '../receipts-api.service';
import { PageData } from 'app/models';
import { ReleaseOrderSearchParams } from 'app/release-order';
import * as receiptGen from '../receipt-gen';

import {
  Client,
  MediaHouse,
  Executive,
  ClientApiService,
  MediaHouseApiService,
  ExecutiveApiService
} from 'app/directory';
import { SocialSharing } from '@ionic-native/social-sharing';

declare var cordova:any;

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  
})
export class ReceiptListComponent implements OnInit {

  receipts: PaymentReceipt[] = [];

  pageCount: number;
  page: number;

  advance = false;

  mediaHouse;
  edition;
  client;
  executive;
  executiveOrg;

  pastDays = 0;

  collapsed = true;

  constructor(  private route: ActivatedRoute,
    private clientApi: ClientApiService,
    private mediaHouseApi: MediaHouseApiService,
    private executiveApi: ExecutiveApiService,
    private router: Router,
    private notifications: NotificationService,
    private dialog: DialogService,
    private api: ReceiptsApiService,
    private windowService: WindowService,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.route.data.subscribe((data: { resolved: { list: PageData<PaymentReceipt>, search: ReleaseOrderSearchParams }, advance: boolean}) => {
      this.receipts = data.resolved.list.list;
      this.advance = data.advance;

      this.pageCount = data.resolved.list.pageCount;
      this.page = data.resolved.list.page;

      let pub = new MediaHouse();
      pub.pubName = data.resolved.search.mediaHouse;
      pub.address.edition = data.resolved.search.edition;

      this.mediaHouse = this.edition = pub;
     
      let cl = new Client();
      cl.orgName = data.resolved.search.client;

      this.client = cl;

      let exe = new Executive();
      exe.executiveName = data.resolved.search.executive;
      exe.orgName = data.resolved.search.executiveOrg;

      this.executive = this.executiveOrg = exe;

      this.pastDays = data.resolved.search.past;
    });
  }

  searchClient = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.clientApi.searchClients(term))
      .catch(() => of([]));
  }

  clientNameFormatter = (client: Client) => client.orgName;
  
  searchExecutive = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.executiveApi.searchExecutives(term))
      .catch(() => of([]));
  }

  private get executiveName() {
    if (this.executive instanceof String) {
      return this.executive;
    }

    return this.executive ? this.executive.executiveName : null;
  }

  searchExecutiveOrg = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.executiveApi.searchExecutivesByOrg(this.executiveName, term))
      .catch(() => of([]));
  }

  executiveNameFormatter = (executive: Executive) => {
    this.executiveOrg = executive;

    return executive.executiveName;
  }
  
  executiveOrgFormatter = (executive: Executive) => executive.orgName;

  searchMediaHouse = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.mediaHouseApi.searchMediaHouses(term))
      .catch(() => of([]));
  }

  private get mediaHouseName() {
    if (this.mediaHouse instanceof String) {
      return this.mediaHouse;
    }

    return this.mediaHouse ? this.mediaHouse.pubName : null;
  }

  searchEdition = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.mediaHouseApi.searchMediaHousesByEdition(term, this.mediaHouseName))
      .catch(() => of([]));
  }

  editionFormatter = (mediaHouse: MediaHouse) => mediaHouse.address.edition;

  mediaHouseNameFormatter = (mediaHouse: MediaHouse) => {
    this.edition = mediaHouse;

    return mediaHouse.pubName;
  }

  gen(receipt: PaymentReceipt,share = false, callback?: () => void) {
    this.api.generate(receipt).subscribe(data => {
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

  cancel(receipt: PaymentReceipt) {
    
  this.dialog.showYesNo("Confirm Cancellation", "Do you want to cancel this Receipt? This cannot be undone.").subscribe(confirm => {
    if (confirm) {
      this.api.cancel(receipt).subscribe(data => {
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

  share(receipt: PaymentReceipt) {
    this.gen(receipt, true, () => {
      this.socialSharing.share('Share Receipt PDF', 'Share', cordova.file.externalRootDirectory + "Download/receipt.pdf");
    });
  }

  private get editionName() {
    if (this.edition instanceof String) {
      return this.edition;
    }

    return this.edition ? (this.edition.address ? this.edition.address.edition : null) : null;
  }

  private get clientName() {
    if (this.client instanceof String) {
      return this.client;
    }

    return this.client ? this.client.orgName : null;
  }

  private get exeOrg() {
    if (this.executiveOrg instanceof String) {
      return this.executiveOrg;
    }

    return this.executiveOrg ? this.executiveOrg.orgName : null;
  }

  search(pageNo: number) {
    this.router.navigate(['/receipts/list/', pageNo], {
      queryParams: new ReleaseOrderSearchParams(this.mediaHouseName, this.editionName, this.clientName, this.executiveName, this.exeOrg, this.pastDays)
    });
  }
}
