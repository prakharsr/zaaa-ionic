import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firm } from '../../models';

@Component({
  selector: 'app-accounts-home',
  templateUrl: './accounts-home.component.html',
  
})
export class AccountsHomeComponent implements OnInit {

  firm: Firm;

  constructor(public goback: GobackService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { firm: Firm }) => {
      this.firm = data.firm;
    });
  }

}
