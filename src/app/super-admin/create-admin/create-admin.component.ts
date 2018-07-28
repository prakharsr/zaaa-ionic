import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  
})
export class CreateAdminComponent implements OnInit {

  constructor(public goback: GobackService, ) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}
