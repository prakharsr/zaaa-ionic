import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  // styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  name: string;
  firmName: string;
  registeredAddress: string;
  officeAddress: string;
  landlineNo: string;
  fax: string;
  website: string;
  panNo : string;
  gstNo : string;
  bankAccountName : string;
  bankAccountNo : string;
  bankName : string;
  bankIfsc : string;
  bankBranchAddress : string;
  bankAccountType : string;

  constructor() { }

  ngOnInit() {
  }

  submit() {}
}
