import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  
})
export class SuperAdminDashboardComponent implements OnInit {

  constructor(public goback: GobackService, ) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
