import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { SuperAdminApiService } from '../super-admin-api.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  
})
export class AdminListComponent implements OnInit {

  list = [];

  constructor(public goback: GobackService, private api: SuperAdminApiService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.api.admins.subscribe(data => this.list = data);
  }

}
