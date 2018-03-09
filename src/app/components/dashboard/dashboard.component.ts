import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../animations';
import { ApiService } from '../../services/api.service';
import { Platform } from 'ionic-angular';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-dashboard',
  animations: [routerAnimation],
  templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: boolean;

  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(public api: ApiService, private goback: GobackService) {
    
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
