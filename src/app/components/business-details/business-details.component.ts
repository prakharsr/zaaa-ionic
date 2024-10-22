import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firm, UserProfile } from 'app/models';

import {
  ApiService,
  DialogService,
  NotificationService,
  StateApiService,
  IfscService
} from 'app/services';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  
})
export class BusinessDetailsComponent implements OnInit {

  user: UserProfile;
  backup = new Firm();
  profile = new Firm();

  editAgencyDetails = false;
  editContactDetails = false;
  editAddr = false;
  editBankDetails = false;
  editSocialDetails = false;

  moreAgencyDetails = false;
  moreContactDetails = false;
  moreAddr = false;
  moreBankDetails = false;

  constructor(private ifscService: IfscService,
    private api: ApiService,
    private dialog: DialogService,
    private notifications: NotificationService,
    private route: ActivatedRoute,
    public stateApi: StateApiService) {}

  ngOnInit() {
    this.route.data.subscribe((data: { firm: Firm, user: UserProfile }) => {
      this.profile = data.firm;
      this.user = data.user;
      Object.assign(this.backup, this.profile);
    });
  }

  uploadLogo(files: FileList) {
    this.api.uploadFirmLogo(files.item(0)).subscribe(
      data => {
        if (data.success) {
          this.notifications.show('Logo uploaded successfully');

          this.profile.logo = environment.uploadsBaseUrl + data.photo;
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }

  removeLogo() {
    this.dialog.confirmDeletion("Are you sure want to delete the firm logo?").subscribe(
      confirm => {
        if (!confirm) {
          return;
        }

        this.api.deleteFirmLogo().subscribe(
          data => {
            if (data.success) {
              this.notifications.show('Logo removed successfully');
    
              this.profile.logo = environment.uploadsBaseUrl + data.photo;
            }
            else {
              console.log(data);
    
              this.notifications.show(data.msg);
            }
          }
        )
      }
    );
  }

  ifscChanged() {
    if (this.profile.bankIfsc.length == 11) {
      this.ifscService.getData(this.profile.bankIfsc).subscribe(
        data => {
          this.profile.bankName = data.BANK;
          this.profile.bankBranchAddress = data.ADDRESS;
        }
      );
    }
    else {
      this.profile.bankName = '';
      this.profile.bankBranchAddress = '';
    }
  }

  copyAddress() {
    this.profile.officeAddress.address = this.profile.registeredAddress.address;
    this.profile.officeAddress.city = this.profile.registeredAddress.city;
    this.profile.officeAddress.state = this.profile.registeredAddress.state;
    this.profile.officeAddress.pincode = this.profile.registeredAddress.pincode;
  }

  private stopEditing() {
    this.editAgencyDetails = false;
    this.editContactDetails = false;
    this.editAddr = false;
    this.editBankDetails = false;
    this.editSocialDetails = false;
  }

  get editing() {
    return this.editAgencyDetails
     || this.editContactDetails
     || this.editAddr
     || this.editBankDetails
     || this.editSocialDetails;
  }

  submit() {
    this.api.setFirmProfile(this.profile).subscribe(
      data => {
        if (data.success) {
          this.notifications.show("Saved");

          this.stopEditing();

          Object.assign(this.backup, this.profile);
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }

  cancel() {
    this.stopEditing();

    Object.assign(this.profile, this.backup);
  }
}
