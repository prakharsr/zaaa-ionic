import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ApiService, NotificationService } from 'app/services';
import { Router } from '@angular/router';
import { Ticket } from '../../models';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  
})
export class CreateTicketComponent implements OnInit {

  ticket = new Ticket();

  constructor(public goback: GobackService, private api: ApiService,
    private notifications: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.goback.urlInit();
  }

  goBack() {
    this.router.navigateByUrl('/tickets');
  }

  cancel() {
    this.goBack();
  }

  submit() {
    this.api.createTicket(this.ticket).subscribe(data => {
      if (data.success) {
        this.goBack();
      }
      else {
        console.log(data);

        this.notifications.show(data.msg);
      }
    });
  }

}