import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  
})
export class NotificationsComponent implements OnInit {

  constructor(public goback: GobackService, private api: ApiService) { }

  list = [];

  ngOnInit() {
    this.goback.urlInit();
    this.api.notifications.subscribe(data => {
      if (data.success) {
        this.list = data.notifications;
      }
    });
  }

}
