import { WindowService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { ReleaseOrder, Insertion, TaxValues, OtherCharges } from '../release-order';
import { ReleaseOrderApiService } from '../release-order-api.service';
import { StateApiService, NotificationService, OptionsService, DialogService } from 'app/services';

declare var cordova:any;

import {
  RateCard,
  FixSize,
  Scheme,
  RateCardApiService
} from 'app/rate-card';

import {
  Client,
  MediaHouse,
  Executive,
  ClientApiService,
  MediaHouseApiService,
  ExecutiveApiService,
  Pullout
} from 'app/directory';
import { PreviewComponent } from 'app/components/preview/preview.component';
import { UserProfile, Firm } from '../../models';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'app-release-order',
  templateUrl: './release-order.component.html',
  
})
export class ReleaseOrderComponent implements OnInit {

  // Dummy variable
  submitted = false;

  releaseorder = new ReleaseOrder();
  query: string;
  edit = false;
  id: string;

  selectedCategories: string[] = [null, null, null, null, null, null];
  fixedCategoriesLevel = -1;

  submitting = false;

  others = "Others";

  dropdownPullOutName: string;
  customPullOutName = 'Main';

 showCalculations = false;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private api: ReleaseOrderApiService,
    private mediaHouseApi: MediaHouseApiService,
    private clientApi: ClientApiService,
    private executiveApi: ExecutiveApiService,
    private rateCardApi: RateCardApiService,
    public stateApi: StateApiService,
    private notifications: NotificationService,
    public options: OptionsService,
    private dialog: DialogService,
    private windowService: WindowService,
    private socialSharing: SocialSharing,
    public platform: Platform) { }

    calc() {
      if(this.showCalculations) {
        this.showCalculations = false;
      }
      else {
        this.showCalculations = true;
      }
}

  get isTypeWords() {

    if (this.mediaType == 'Print' && this.releaseorder.adType == 'Text Classified') {
      return true;
    }

    if (this.mediaType == 'Electronic' && this.releaseorder.adType == 'Scroll') {
      return true;
    }

    return false;
  }

  get isTypeLen() {

    if (this.mediaType == 'Print' && this.releaseorder.adType != 'Text Classified') {
      return true;
    }

    return false;
  }

  get isTypeTime() {

    if (this.mediaType == 'Air') {
      return true;
    }

    if (this.mediaType == 'Electronic' && this.releaseorder.adType != 'Scroll') {
      return true;
    }

    return false;
  }

  toDate(date: NgbDate) {
    return new Date(date.year, date.month - 1, date.day);
  }

  private confirmGeneration(releaseOrder: ReleaseOrder) : Observable<boolean> {
    if (releaseOrder.generated) {
      return of(true);
    }

    return this.dialog.showYesNo('Confirm Generation', "Release Order will be generated. Once generated it cannot be edited or deleted. Are you sure you want to continue?");
  }

  save() {
    this.submit().subscribe(data => {
      if (data.success) {
        this.goBack();
      }
      else this.submitting = false;
    });
  }

  testRead() {
    document.addEventListener('deviceready', onDeviceReady, false);  
    function onDeviceReady() {  
        function readFromFile(fileName, cb) {
            var pathToFile = cordova.file.dataDirectory + fileName;
            this.windowService.window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
    
                    reader.onloadend = function (e) {
                        cb(JSON.parse(this.result));
                    };
    
                    reader.readAsText(file);
                }, errorHandler.bind(null, fileName));
            }, errorHandler.bind(null, fileName));
        }
    
        var fileData;
        readFromFile('data.json', function (data) {
            fileData = data;
        });

        var errorHandler = function (fileName, e) {  
          var msg = '';
      
          switch (e.code) {
              case cordova.FileError.QUOTA_EXCEEDED_ERR:
                  msg = 'Storage quota exceeded';
                  break;
              case cordova.FileError.NOT_FOUND_ERR:
                  msg = 'File not found';
                  break;
              case cordova.FileError.SECURITY_ERR:
                  msg = 'Security error';
                  break;
              case cordova.FileError.INVALID_MODIFICATION_ERR:
                  msg = 'Invalid modification';
                  break;
              case cordova.FileError.INVALID_STATE_ERR:
                  msg = 'Invalid state';
                  break;
              default:
                  msg = 'Unknown error';
                  break;
          };
      
          console.log('Error (' + fileName + '): ' + msg);
      }


    }
  }

    testWrite() {
      document.addEventListener('deviceready', onDeviceReady, false);  
      function onDeviceReady() {  
          function writeToFile(fileName, data) {
              data = JSON.stringify(data, null, '\t');
              this.windowService.window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
                  directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
                      fileEntry.createWriter(function (fileWriter) {
                          fileWriter.onwriteend = function (e) {
                              // for real-world usage, you might consider passing a success callback
                              console.log('Write of file "' + fileName + '"" completed.');
                          };
      
                          fileWriter.onerror = function (e) {
                              // you could hook this up with our global error handler, or pass in an error callback
                              console.log('Write failed: ' + e.toString());
                          };
      
                          var blob = new Blob([data], { type: 'text/plain' });
                          fileWriter.write(blob);
                      }, errorHandler.bind(null, fileName));
                  }, errorHandler.bind(null, fileName));
              }, errorHandler.bind(null, fileName));
          }
      
          writeToFile('example.json', { foo: 'bar' });

          var errorHandler = function (fileName, e) {  
            var msg = '';
        
            switch (e.code) {
                case cordova.FileError.QUOTA_EXCEEDED_ERR:
                    msg = 'Storage quota exceeded';
                    break;
                case cordova.FileError.NOT_FOUND_ERR:
                    msg = 'File not found';
                    break;
                case cordova.FileError.SECURITY_ERR:
                    msg = 'Security error';
                    break;
                case cordova.FileError.INVALID_MODIFICATION_ERR:
                    msg = 'Invalid modification';
                    break;
                case cordova.FileError.INVALID_STATE_ERR:
                    msg = 'Invalid state';
                    break;
                default:
                    msg = 'Unknown error';
                    break;
            };
        
            console.log('Error (' + fileName + '): ' + msg);
        }
      }
    }
    

//   openPdf() {
//     // cordova.plugins.fileOpener2.open(
//     //   '/sdcard/Download/releaseorder.pdf', 
//     //   'application/pdf', 
//     //   { 
//     //     error : function(e) { 
//     //         console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
//     //     },
//     //     success : function () {
//     //         console.log('file opened successfully'); 				
//     //     }
//     // });

//     let filepath = cordova.file.externalRootDirectory + "Download/releaseorder.pdf";

//     checkIfFileExists(filepath);

// function checkIfFileExists(path) {
//     this.windowService.window.resolveLocalFileSystemURL(path, function (fileEntry) {
//       this.windowService.window.resolveLocalFileSystemURL(cordova.file.tempDirectory, function (dirEntry) {
//             dirEntry.getFile(fileEntry.name, {create : false}, function() {
//                 openFile(fileEntry.nativeURL);
//             }, function() {
//                 fileEntry.copyTo(dirEntry, fileEntry.name, function (newFileEntry) {
//                     openFile(newFileEntry.nativeURL);
//                 });
//             });
            
//         });
//     });
// }

// function openFile(file) {
//     console.log("Opening fileopener...", file);
//     cordova.plugins.fileOpener2.showOpenWithDialog(file, 'application/pdf', {
//         error: function (e) {
//             console.log("file did not open");
//             console.log(file);
//             console.log(e);
//             console.log(e.message);
//         },
//         success: function () {
//             console.log("file opened successfully");
//         }
//     });
// }

//   }

//   openPdf2() {
//     let filepath = cordova.file.externalRootDirectory + "Download/releaseorder.pdf";

//     window.open(filepath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
//   }

  saveAndGen(share = false, callback?: () => void) {
    // Confirm
    this.confirmGeneration(this.releaseorder).subscribe(confirm => {
      if (confirm) {
        // Save
        this.submit().subscribe(data => {
          if (data.success) {
            // Generate
            this.api.generatePdf(this.releaseorder).subscribe(data => {
              if (data.msg) {
                this.notifications.show(data.msg);    
              }
              else {
                this.releaseorder.generated = true;

              document.addEventListener('deviceready', () => {
                console.log(cordova.file);

              let folderpath = cordova.file.externalRootDirectory + "Download/";
              let filename = "releaseorder.pdf";
             
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
                          this.notifications.show('Saved releaseorder.pdf in Download ');
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

              //   this.windowService.window.requestFileSystem(1, 0, function (fs) {

              //     console.log('file system open: ' + fs.name);
              //     fs.root.getFile("newPersistentFile.pdf", { create: true, exclusive: false }, function (fileEntry) {
              
              //         console.log("fileEntry is file?" + fileEntry.isFile.toString());
              //         // fileEntry.name == 'someFile.txt'
              //         // fileEntry.fullPath == '/someFile.txt'
              //         writeFile(fileEntry, data);

              //         function writeFile(fileEntry, dataObj) {
              //           // Create a FileWriter object for our FileEntry (log.txt).
              //           fileEntry.createWriter(function (fileWriter) {
                    
              //               fileWriter.onwriteend = function() {
              //                   console.log("Successful file write...");
              //                   this.readFile(fileEntry);
              //               };
                    
              //               fileWriter.onerror = function (e) {
              //                   console.log("Failed file write: " + e.toString());
              //               };
                    
              //               // If data object is not passed in,
              //               // create a new Blob instead.
              //               if (!dataObj) {
              //                   dataObj = new Blob(['some file data'], { type: 'text/plain' });
              //               }
                    
              //               fileWriter.write(dataObj);
              //           });
              //       }
                    
              //       function readFile(fileEntry) {
                    
              //         fileEntry.file(function (file) {
              //             var reader = new FileReader();
                    
              //             reader.onloadend = function() {
              //                 console.log("Successful file read: " + this.result);
              //                 displayFileData(fileEntry.fullPath + ": " + this.result);
                    
              //                 function displayFileData(data){
              //                   alert(data);
              //                   }
              //             };
                    
              //             reader.readAsText(file);
                    
              //         });
              //       }
              
              //     });
              
              // });

      
            });
            
              }
            });
          }
          else this.submitting = false;
        });
      }
    })
  }

  sharePdf() {
    this.saveAndGen(true, () => {
      this.socialSharing.share('Share Release Order PDF', 'Share', cordova.file.externalRootDirectory + "Download/releaseorder.pdf");
    });

  }

  saveAndSendMsg() {
    // Confirm
    this.confirmGeneration(this.releaseorder).subscribe(confirm => {
      if (confirm) {
        // Mailing Details
        this.dialog.getMailingDetails().subscribe(mailingDetails => {
          if (mailingDetails) {
            // Save
            this.submit().subscribe(data => {
              if (data.success) {
                // Mail
                this.api.sendMail(this.releaseorder, mailingDetails).subscribe(data => {
                  if (data.success) {
                    this.notifications.show("Sent Successfully");
    
                    this.releaseorder.generated = true;
    
                    this.router.navigate(['/releaseorders', this.releaseorder.id]);
                  }
                  else {
                    console.log(data);
    
                    this.notifications.show(data.msg);
                  }
                });
              }
              else this.submitting = false;
            });
          }
        });
      }
    });
  }

  genPreview() {
    this.presave();

    this.api.previewROhtml(this.releaseorder).subscribe(data => {
      this.dialog.show(PreviewComponent, { width: '100%', height: '100%', maxWidth: '100%', data: data.content }).subscribe(response => {
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
            this.sharePdf();
            break;
        }
      });
    });
  }

  get checkInsertionCount() {
    return this.releaseorder.insertions.length == this.availableAds;
  }

  initExecutive() {
    this.route.data.subscribe((data: { user: UserProfile, firm: Firm }) => {
      this.releaseorder.paymentBankName = data.firm.bankName;

      let exe = new Executive();
      exe.executiveName = data.user.name;
      exe.orgName = data.firm.name;

      this.executive = exe;
    });
  }

  ngOnInit() {
     
    this.dropdownPullOutName = this.others;

    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');

        this.edit = true;

        this.initFromReleaseOrder();
      }
      else if (params.has('copy')) {
        this.initFromReleaseOrder();

        this.releaseorder.releaseOrderNO = "";
        this.releaseorder.id = "";
        this.releaseorder.generated = false;
        this.releaseorder.cancelled = false;
        this.releaseorder.date = new Date();

        this.releaseorder.insertions = this.releaseorder.insertions.map(insertion => new Insertion(insertion.date));
      }
      else if (params.has('rateCard')) {
        this.route.data.subscribe((data: { rateCard: RateCard }) => this.initFromRateCard(data.rateCard));
      }
      else {
        this.initNew();
      }
    });
  }

  private initNew() {
    this.customSize = true;
    this.customScheme = true;

    this.releaseorder.AdTime = this.adTimes[0];
    this.mediaType = this.mediaTypes[0];
    this.releaseorder.adHue = this.hues[0];
    // this.releaseorder.unit = this.units[0];
    this.releaseorder.adPosition = this.options.positions[0];
    this.selectedTax = this.taxes[1];
    this.releaseorder.paymentType = 'Credit';

    this.releaseorder.rate = null;

    this.initExecutive();
  }

  private initFromReleaseOrder() {
    this.route.data.subscribe((data: { releaseOrder: ReleaseOrder }) => {
      this.releaseorder = data.releaseOrder;

      this.buildCategoryTree([
        this.releaseorder.adCategory1,
        this.releaseorder.adCategory2,
        this.releaseorder.adCategory3,
        this.releaseorder.adCategory4,
        this.releaseorder.adCategory5,
        this.releaseorder.adCategory6
      ]);

      let insertionBkp = this.releaseorder.insertions;

      if (this.releaseorder.adSizeCustom) {
        this.customSize = true;
        this.customSizeL = this.releaseorder.adSizeL;
        this.customSizeW = this.releaseorder.adSizeW;
      }
      else {
        this.fixSizes = [{
          amount: this.releaseorder.adSizeAmount,
          length: this.releaseorder.adSizeL,
          width: this.releaseorder.adSizeW
        }];

        this.selectedSize = this.fixSizes[0];
      }

      // edit only as custom scheme
      this.customScheme = true;
      this.customFree = this.releaseorder.adSchemeFree;
      this.customPaid = this.releaseorder.adSchemePaid;

      this.adCountPaid = (+this.releaseorder.adTotal * +this.customPaid) / (+this.customPaid + +this.customFree);

      this.selectedTax = this.taxes.find(element => element.primary == this.releaseorder.taxAmount.primary
        && element.secondary == this.releaseorder.taxAmount.secondary);

      let dirMediaHouse = new MediaHouse();
      dirMediaHouse.pubName = this.releaseorder.publicationName;
      dirMediaHouse.address.edition = this.releaseorder.publicationEdition;
      dirMediaHouse.address.state = this.releaseorder.publicationState;
      dirMediaHouse.GSTIN = this.releaseorder.publicationGSTIN;
      dirMediaHouse.mediaType = this.releaseorder.mediaType;
      this.mediaHouse = dirMediaHouse;
      
      let dirClient = new Client();
      dirClient.orgName = this.releaseorder.clientName;
      dirClient.address.state = this.releaseorder.clientState;
      dirClient.GSTIN = this.releaseorder.clientGSTIN;
      this.client = dirClient;

      let dirExecutive = new Executive();
      dirExecutive.executiveName = this.releaseorder.executiveName;
      dirExecutive.orgName = this.releaseorder.executiveOrg;
      this.executive = dirExecutive;

      this.releaseorder.insertions = insertionBkp;

      this.customPullOutName = this.releaseorder.pulloutName;

      // hack
      this.releaseorder.rate = this.releaseorder.rate;
    });
  }

  hues = ['Black & White', 'Colored'];

  private initFromRateCard(rateCard: RateCard) {
    if (rateCard) {
      this.releaseorder.mediaType = rateCard.mediaType;
      this.releaseorder.adType = rateCard.adType;
      this.releaseorder.AdTime = rateCard.AdTime;
      this.releaseorder.rate = rateCard.rate;
      //this.releaseorder.unit = rateCard.unit;
      this.releaseorder.adHue = rateCard.hue;
      this.releaseorder.adPosition = rateCard.position;
      this.releaseorder.AdWordsMax = rateCard.AdWordsMax;
      this.customPullOutName = rateCard.pullOutName;

      this.releaseorder.paymentType = this.paymentTypes[0];
      this.selectedTax = this.taxes[0];

      this.releaseorder.PremiumCustom = rateCard.PremiumCustom;
      this.releaseorder.PremiumBox.Amount = rateCard.PremiumBox;
      this.releaseorder.PremiumBaseColour.Amount = rateCard.PremiumBaseColour;
      this.releaseorder.PremiumEmailId.Amount = rateCard.PremiumEmailId;
      this.releaseorder.PremiumCheckMark.Amount = rateCard.PremiumCheckMark;
      this.releaseorder.PremiumWebsite.Amount = rateCard.PremiumWebsite;
      this.releaseorder.PremiumExtraWords.Amount = rateCard.PremiumExtraWords;

      if (rateCard.fixSizes.length > 0) {
        this.fixSizes = rateCard.fixSizes;
        this.selectedSize = this.fixSizes[0];
      }
      else this.customSize = true;

      if (rateCard.schemes.length > 0) {
        this.schemes = rateCard.schemes;
        this.selectedScheme = this.schemes[0];
      }
      else this.customScheme = true;

      for (let i = 0; i < rateCard.categories.length; ++i) {
        if (rateCard.categories[i]) {
          ++this.fixedCategoriesLevel;
        }
        else break;
      }

      this.buildCategoryTree(rateCard.categories);

      this.mediaHouseApi.searchMediaHousesByEdition(rateCard.bookingEdition, rateCard.mediaHouseName).subscribe(data => {
        if (data && data.length > 0) {
          this.mediaHouse = data[0];

          this.initMediaHouse(this.mediaHouse);
        }
      });

      this.initExecutive();
    }
  }

  private buildCategoryTree(categories: string[]) {
    for (let i = 0; i < categories.length; ++i) {
      this.selectedCategories[i] = categories[i];
    }
  }

  getCategories() {
    this.dialog.getCategoriesDetails({
      categories: this.selectedCategories,
      fixedLevel: this.fixedCategoriesLevel
    }).subscribe(data => {
      if (data) {
        this.selectedCategories = data.selectedCategories.map(M => M ? M.name : null);
      }
    });
  }
  
  private goBack() {
    this.router.navigateByUrl(this.edit ? '/releaseorders/' + this.id : '/releaseorders');
  }

  cancel() {
    this.goBack();
  }

  private createReleaseOrder() {
    return this.api.createReleaseOrder(this.releaseorder).pipe(
      map(data => {
        if (data.success) {
          this.releaseorder.id = data.msg;
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }

        return data;
      })
    );
  }

  private editReleaseOrder() {
    return this.api.editReleaseOrder(this.releaseorder).pipe(
      map(data => {
        if (data.success) {
        }
        else {
          this.notifications.show(data.msg);
        }

        return data;
      })
    )
  }

  private presave() {
    this.releaseorder.adTotal = this.availableAds;
    this.releaseorder.adTotalSpace = this.totalSpace;
    this.releaseorder.adGrossAmount = this.grossAmount;
    this.releaseorder.netAmountFigures = this.displayTotal;
    this.releaseorder.netAmountWords = this.options.amountToWords(this.displayTotal);
    this.releaseorder.clientPayment = this.releaseorder.paymentAmount = this.clientPayment;

    this.releaseorder.taxAmount = this.selectedTax;

    this.releaseorder.adCategory1 = this.selectedCategories[0];
    this.releaseorder.adCategory2 = this.selectedCategories[1];
    this.releaseorder.adCategory3 = this.selectedCategories[2];
    this.releaseorder.adCategory4 = this.selectedCategories[3];
    this.releaseorder.adCategory5 = this.selectedCategories[4];
    this.releaseorder.adCategory6 = this.selectedCategories[5];
    
    this.releaseorder.publicationName = this.mediaHouse.pubName ? this.mediaHouse.pubName : this.mediaHouse;
    this.releaseorder.clientName = this.client.orgName ? this.client.orgName : this.client;
    this.releaseorder.executiveName = this.executive.executiveName ? this.executive.executiveName : this.executive;

    this.releaseorder.pulloutName = this.dropdownPullOutName == this.others ? this.customPullOutName : this.dropdownPullOutName;

    if (this.customSize) {
      this.releaseorder.adSizeL = this.customSizeL;
      this.releaseorder.adSizeW = this.customSizeW;
      this.releaseorder.adSizeCustom = true;
    }
    else {
      this.releaseorder.adSizeL = this.selectedSize.length;
      this.releaseorder.adSizeW = this.selectedSize.width;
      this.releaseorder.adSizeAmount = this.selectedSize.amount;
      this.releaseorder.adSizeCustom = false;
    }

    if (this.customScheme) {
      this.releaseorder.adSchemeFree = this.customFree;
      this.releaseorder.adSchemePaid = this.customPaid;
    }
    else {
      this.releaseorder.adSchemeFree = this.selectedScheme.Free;
      this.releaseorder.adSchemePaid = this.selectedScheme.paid;
    }
  }

  submit () : Observable<any> {
    if (this.releaseorder.insertions.length < this.availableAds) {
      this.notifications.show(`Please select ${this.availableAds} insertion(s)`);

      return of({});
    }

    this.submitting = true;

    this.presave();

    let base: Observable<any> = this.edit ? this.editReleaseOrder() : this.createReleaseOrder();

    return base;
  }

  searchMediaHouse = (text: Observable<string>) => {
    return text.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.mediaHouseApi.searchMediaHouses(term))
      .catch(() => of([]));
  }

  mediaHouse;

  pullouts: Pullout[] = [];

  initMediaHouse(result: MediaHouse) {
    if (result.address) {
      this.releaseorder.publicationEdition = result.address.edition;
      this.releaseorder.publicationState = result.address.state;
      this.releaseorder.publicationGSTIN = result.GSTIN;

      this.releaseorder.adEdition = result.address.edition;
    }

    if (result.pullouts) {
      this.pullouts = result.pullouts;
    }

    if (this.mediaType != result.mediaType) {
      this.mediaType = result.mediaType;
    }
  }

  get mediaType() {
    return this.releaseorder.mediaType;
  }

  set mediaType(mediaType: string) {
    this.releaseorder.mediaType = mediaType;

    this.adType = this.adTypes[0];
  }

  get adType() {
    return this.releaseorder.adType;
  }

  set adType(adType: string) {
    this.releaseorder.adType = adType;
    // this.releaseorder.unit = this.units[0];
  }

  mediaTypes = ['Print', 'Air', 'Electronic'];

  get adTypes() {
    switch (this.releaseorder.mediaType) {
      case 'Print':
        return ['Text Classified', 'Display', 'Display Classified'];

      case 'Air':
        return ['RJ Mentions', 'Radio Commercials', 'Sponsorship Tags', 'Road Block'];

      case 'Electronic':
        return ['VJ Mentions', 'Banner', 'Scroll', 'Commercials'];
    }

    return [];
  }

  adTimes = ['Any Time', 'Prime Time ', 'Evening', 'Morning'];

  // get units() {
  //   let result = [];

  //   if (this.isTypeLen) {
  //     result.push('Sqcm');
  //   }

  //   if (this.isTypeWords) {
  //     result.push('Words');
  //     result.push('Lines');
  //   }

  //   if (this.isTypeTime) {
  //     result.push('sec');
  //   }

  //   return result;
  // }

  get rateText() {
    if (this.isTypeLen) {
      return this.releaseorder.fixRate ? "Rate per insertion" : "Rate per sqcm";
    }

    if (this.isTypeWords) {
      return "Rate per insertion";
    }

    if (this.isTypeTime) {
      return "Rate per sec";
    }
  }

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
    this.releaseorder.clientState = result.address.state;
    this.releaseorder.clientGSTIN = result.GSTIN;

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
    this.releaseorder.executiveOrg = result.orgName;

    return result.executiveName;
  }

  executiveResultFormatter = (result: Executive) => result.executiveName;

  isInsertionTimeLimitValid(date: NgbDate) {
    if (!this.customScheme && this.selectedScheme && this.selectedScheme.timeLimit) {
      let now = new Date();
      let last = new Date();
      now.setDate(now.getDate() - 1);
      last.setDate(last.getDate() + this.selectedScheme.timeLimit + 1);

      return date.before(new NgbDate(last.getFullYear(), last.getMonth() + 1, last.getDate()))
        && date.after(new NgbDate(now.getFullYear(), now.getMonth() + 1, now.getDate()));
    }

    return true;
  }

  addInsertion(date: NgbDate) {
    const index = this.findInsertion(date);

    if (index == -1) {
      if (this.releaseorder.insertions.length >= this.availableAds) {
        this.notifications.show('Total No of Ads reached');
  
        return;
      }
      else if (!this.isInsertionTimeLimitValid(date)) {
        this.notifications.show('Date outside Scheme Time Limit');

        return;
      }

      this.releaseorder.insertions.push(new Insertion(date));
    }
    else this.removeInsertion(index);
  }

  removeInsertion(i: number) {
    this.releaseorder.insertions.splice(i, 1);
  }

  findInsertion(date: NgbDate): number {
    return this.releaseorder.insertions.findIndex(element => element.date.day == date.day
      && element.date.month == date.month
      && element.date.year == date.year);
  }

  isSelected(date: NgbDate) {
    return this.findInsertion(date) != -1;
  }

  getInsertions() {
    this.dialog.getInsertionDetails({
      insertions: this.releaseorder.insertions.map(insertion => new Insertion(insertion.date)),
      availableAds: this.availableAds,
      timeLimit: !this.customScheme && this.selectedScheme && this.selectedScheme.timeLimit
    }).subscribe(data => {
      this.releaseorder.insertions = data;
    });
  }

  fixSizes: FixSize[] = [];

  customSize = false;

  selectedSize: FixSize;

  customSizeL: number;
  customSizeW: number;

  schemes: Scheme[] = [];

  _customScheme = false;

  get customScheme() {
    return this._customScheme;
  }

  set customScheme(custom: boolean) {
    this._customScheme = custom;

    this.adCountPaid = custom ? this.customPaid : this.selectedScheme.paid;

    this.releaseorder.insertions = [];
  }

  _selectedScheme: Scheme;

  get selectedScheme() {
    return this._selectedScheme;
  }

  set selectedScheme(scheme: Scheme) {
    this._selectedScheme = scheme;

    this.adCountPaid = scheme.paid;

    this.releaseorder.insertions = [];
  }

  _customPaid = 1;

  get customPaid() {
    return this._customPaid;
  }

  set customPaid(paid: number) {
    this._customPaid = paid;

    this.adCountPaid = paid;

    this.releaseorder.insertions = [];
  }

  customFree = 0;

  get totalSpace() {
    if (this.customSize || this.selectedSize == null) {
      return this.customSizeL * this.customSizeW;
    }
    else return this.selectedSize.length * this.selectedSize.width;
  }

  get grossAmountWithoutPremium() {
    if (this.isTypeLen) {
      if (this.customSize && !this.releaseorder.fixRate) {
        return this.releaseorder.rate * this.totalSpace;
      }
      else if (this.customSize && this.releaseorder.fixRate) {
        return this.releaseorder.rate;
      }
      else {
        return this.selectedSize.amount;
      }
    }
    else if (this.isTypeTime) {
      return this.releaseorder.rate * this.releaseorder.AdDuration;
    }
    else if (this.isTypeWords) {
      return this.releaseorder.rate;
    }
    else return 0;
  }

  get grossAmountSingle() {
    let amount = this.grossAmountWithoutPremium;

    if (this.isTypeWords) {
      if (this.releaseorder.PremiumBox.Included) {
        amount += this.releaseorder.PremiumBox.Amount;
      }

      if (this.releaseorder.PremiumBaseColour.Included) {
        amount += this.releaseorder.PremiumBaseColour.Amount;
      }
      
      if (this.releaseorder.PremiumCheckMark.Included) {
        amount += this.releaseorder.PremiumCheckMark.Amount;
      }
      
      if (this.releaseorder.PremiumEmailId.Included) {
        amount += this.releaseorder.PremiumEmailId.Amount * this.releaseorder.PremiumEmailId.Quantity;
      }
      
      if (this.releaseorder.PremiumWebsite.Included) {
        amount += this.releaseorder.PremiumWebsite.Amount * this.releaseorder.PremiumWebsite.Quantity;
      }
      
      if (this.releaseorder.PremiumExtraWords.Included) {
        amount += this.releaseorder.PremiumExtraWords.Amount * this.releaseorder.PremiumExtraWords.Quantity;
      }
    }
    else if (this.releaseorder.PremiumCustom.Percentage) {
      amount += (this.releaseorder.PremiumCustom.Amount * amount) / 100;
    }
    else amount += this.releaseorder.PremiumCustom.Amount;

    return amount;
  }

  get grossAmount() {
    return this.grossAmountSingle * this.adCountPaid;
  }

  get netAmount() {
    let amount = this.grossAmount;

    amount -= (this.releaseorder.publicationDiscount * amount / 100);
    amount -= (this.releaseorder.agencyDiscount1 * amount / 100);
    amount -= (this.releaseorder.agencyDiscount2 * amount / 100);

    return Math.ceil(amount);
  }

  adCountPaid = 1;

  get availableAds() {
    if (this.customScheme) {
      let multiplier = this.adCountPaid / this.customPaid;

      return +this.adCountPaid + this.customFree * multiplier;
    }
    
    let multiplier = this.adCountPaid / this.selectedScheme.paid;

    return +this.adCountPaid + this.selectedScheme.Free * multiplier;
  }

  taxes: TaxValues[] = [
    new TaxValues(0),
    new TaxValues(5),
    new TaxValues(18)
  ];

  selectedTax: TaxValues;

  get taxDisplay() {
    let tax = this.selectedTax.primary + "%";

    if (this.selectedTax.secondary) {
      tax += " + " + this.selectedTax.secondary + "%"
    }

    return tax + (this.releaseorder.taxIncluded ? " Tax Included" : " Tax Excluded");
  }

  get clientPayment() {
    let amount = this.grossAmount;
    
    this.releaseorder.otherCharges.forEach(element => amount += +element.amount);

    amount -= (this.releaseorder.publicationDiscount * amount / 100);

    return Math.ceil(amount);
  }

  otherChargesTypes = ['Designing Charges', 'Extra Copy/Newspaper Charges', 'Certificate Charges'];

  paymentTypes = ['Cash', 'Credit', 'Cheque', 'NEFT'];

  addMediaHouse() {
    let obj = new MediaHouse();

    obj.pubName = this.mediaHouse.pubName ? this.mediaHouse.pubName : this.mediaHouse;
    obj.address.edition = this.releaseorder.publicationEdition;
    obj.address.state = this.releaseorder.publicationState;
    obj.GSTIN = this.releaseorder.publicationGSTIN;
    obj.mediaType = this.releaseorder.mediaType;
    let pullout = this.dropdownPullOutName == this.others ? this.customPullOutName : this.dropdownPullOutName;
    obj.pullouts = [{ Name: pullout, Frequency: "Daily", Language: "", Remark: "" }];

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
    obj.address.state = this.releaseorder.clientState;
    obj.GSTIN = this.releaseorder.clientGSTIN;
    
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
  
  addCharges() {
    let item = new OtherCharges();
    item.chargeType = this.otherChargesTypes[0];

    this.releaseorder.otherCharges.push(item);
  }

  removeOtherCharge(i: number) {
    this.releaseorder.otherCharges.splice(i, 1);
  }

  addExecutive() {
    let obj = new Executive();

    obj.executiveName = this.executive.executiveName ? this.executive.executiveName : this.executive;
    obj.orgName = this.releaseorder.executiveOrg;
    
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

  private round2(num: number) {
    return Math.round(num * 100) / 100
  }

  get displayAmount() {
    let taxplus = this.selectedTax.primary + this.selectedTax.secondary;

    return this.releaseorder.taxIncluded
      ? this.round2(100 * this.netAmount / (100 + taxplus))
      : this.netAmount;
  }

  get displayTax() {
    let taxplus = this.selectedTax.primary + this.selectedTax.secondary;

    return this.releaseorder.taxIncluded
      ? this.round2(taxplus * this.netAmount / (100 + taxplus))
      : this.round2(this.netAmount * taxplus / 100);
  }

  get displayTotal() {
    return Math.ceil(this.displayAmount + this.displayTax);
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
          this.sharePdf();
          break;
      }
    }
    else this.notifications.show('Fix errors before submitting');
  }

  get perInsertionRate() {
    return Math.ceil(this.displayTotal / this.availableAds);
  }

  get perSqcmRate() {
    return Math.ceil(this.perInsertionRate / this.totalSpace);
  }
}
