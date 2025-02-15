
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';
import { AdvanceReceipt } from '../payment-receipt';
import { ReceiptsApiService } from '../receipts-api.service';
import { NotificationService, StateApiService, DialogService, WindowService } from 'app/services';

declare var cordova:any;

import {
  Client,
  MediaHouse,
  Executive,
  ClientApiService,
  MediaHouseApiService,
  ExecutiveApiService
} from 'app/directory';
import { Firm, UserProfile } from '../../models';
import { PreviewComponent } from '../../components/preview/preview.component';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'app-advance-receipt',
  templateUrl: './advance-receipt.component.html',
  
})
export class AdvanceReceiptComponent implements OnInit {

  receipt = new AdvanceReceipt();

  submitting = false;
  submitted = false;

  constructor(  private router: Router,
    private route: ActivatedRoute,
    private api: ReceiptsApiService,
    private mediaHouseApi: MediaHouseApiService,
    private clientApi: ClientApiService,
    private executiveApi: ExecutiveApiService,
    private notifications: NotificationService,
    public stateApi: StateApiService,
    private dialog: DialogService,
    private windowService: WindowService,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.receipt.paymentType = this.paymentTypes[0];
      this.receipt.advanced = true;

    this.route.data.subscribe((data: { firm: Firm, user: UserProfile }) => {
      let exe = new Executive();
      exe.executiveName = data.user.name;
      exe.orgName = data.firm.name;

      this.executive = exe;
    });
  }

  private goBack() {
    this.router.navigateByUrl('/receipts/advance');
  }

  submit () : Observable<any> {

    this.submitting = true;

    this.presave()
    return this.createAdvanceReceipt();

  }

  private presave() {
    this.receipt.publicationName = this.mediaHouse ? (this.mediaHouse.pubName ? this.mediaHouse.pubName : this.mediaHouse) : null;
    this.receipt.clientName = this.client.orgName ? this.client.orgName : this.client;
    this.receipt.executiveName = this.executive.executiveName ? this.executive.executiveName : this.executive;
  }

  cancel() {
    this.goBack();
  }

  private createAdvanceReceipt() {
    return this.api.createAdvanceReceipt(this.receipt).pipe(
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

  save() {
    this.submit().subscribe(data => {
      if (data.success) {
        this.goBack();
      }
      else this.submitting = false;
    });
  }

  saveAndGen(share = false, callback?: () => void) {
    this.confirmGeneration().subscribe(confirm=> {
      if(confirm) {
        this.submit().subscribe(data => {
          if (data.success) {
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
              this.goBack();
              });
              }
            });
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
            this.saveAndGen(true, () => {
              this.socialSharing.share('Share Receipt PDF', 'Share', cordova.file.externalRootDirectory + "Download/receipt.pdf");
            });
        
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

  sendMsg(receipt: AdvanceReceipt) {
    this.dialog.getMailingDetails().subscribe(mailingDetails => {
      if (mailingDetails) {
        this.api.sendMail(receipt, mailingDetails).subscribe(data => {
          if (data.success) {
            this.notifications.show("Sent Successfully");

            this.goBack();
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

    return this.dialog.showYesNo('Confirm Generation', "Advance Receipt will be generated. Once generated it cannot be edited or deleted. Are you sure you want to continue?");
  }


  paymentTypes = ['Cash', 'Cheque', 'NEFT'];

  searchMediaHouse = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.mediaHouseApi.searchMediaHouses(term))
      .catch(() => of([]));
  }

  mediaHouse;

  initMediaHouse(result: MediaHouse) {
    if (result.address) {
      this.receipt.publicationEdition = result.address.edition;
      this.receipt.publicationState = result.address.state;
      this.receipt.publicationGSTIN = result.GSTIN;
    }
  }

  mediaTypes = ['Print', 'Air', 'Electronic'];

  mediaHouseInputFormatter = (result: MediaHouse) => {
    this.initMediaHouse(result);

    return result.pubName;
  }

  mediaHouseResultFormatter = (result: MediaHouse) => result.pubName + " - " + result.address.edition;

  client;

  searchClient = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.clientApi.searchClients(term))
      .catch(() => of([]));
  }

  clientInputFormatter = (result: Client) => {
    this.receipt.clientState = result.address.state;
    this.receipt.clientGSTIN = result.GSTIN;

    return result.orgName;
  }

  clientResultFormatter = (result: Client) => result.orgName;

  executive;

  searchExecutive = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.executiveApi.searchExecutives(term))
      .catch(() => of([]));
  }

  executiveInputFormatter = (result: Executive) => {
    this.receipt.executiveOrg = result.orgName;

    return result.executiveName;
  }

  executiveResultFormatter = (result: Executive) => result.executiveName;

  addMediaHouse() {
    let obj = new MediaHouse();

    obj.pubName = this.mediaHouse.pubName ? this.mediaHouse.pubName : this.mediaHouse;
    obj.address.edition = this.receipt.publicationEdition;
    obj.address.state = this.receipt.publicationState;
    obj.GSTIN = this.receipt.publicationGSTIN;

    this.mediaHouseApi.createMediaHouse(obj).subscribe(data => {
      if (data.success) {
        this.notifications.show('Added to Directory');
      }
      else {
        console.log(data);

        this.notifications.show(data.msg);
      }
    });
  }

  addClient() {
    let obj = new Client();

    obj.orgName = this.client.orgName ? this.client.orgName : this.client;
    obj.address.state = this.receipt.clientState;
    obj.GSTIN = this.receipt.clientGSTIN;
    
    this.clientApi.createClient(obj).subscribe(data => {
      if (data.success) {
        this.notifications.show('Added to Directory');
      }
      else {
        console.log(data);

        this.notifications.show(data.msg);
      }
    });
  }

  addExecutive() {
    let obj = new Executive();

    obj.executiveName = this.executive.executiveName ? this.executive.executiveName : this.executive;
    obj.orgName = this.receipt.executiveOrg;
    
    this.executiveApi.createExecutive(obj).subscribe(data => {
      if (data.success) {
        this.notifications.show('Added to Directory');
      }
      else {
        console.log(data);

        this.notifications.show(data.msg);
      }
    });
  }
}
