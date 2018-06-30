import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  
})
export class TicketListComponent implements OnInit {

  res = null;

  constructor(public goback: GobackService, private api: ApiService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.res = this.api.queryTickets(1, 0);
  }

}
