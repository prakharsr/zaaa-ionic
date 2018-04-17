import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Platform } from 'ionic-angular';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: boolean;

 constructor(public api: ApiService, public goback: GobackService) {
    
   }

  ngOnInit() {
    this.goback.urlInit();
    this.api.getUser().subscribe(data => {
      if (data.success) {
        this.admin = data.user.isAdmin;
      }
    })
  }

}
