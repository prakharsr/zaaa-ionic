import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Platform } from 'ionic-angular';
import { GobackService } from '../../services/goback.service';
import { UserProfile } from '../../models/user-profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: boolean;

 constructor(private api: ApiService, public goback: GobackService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { user: UserProfile }) => {
      this.admin = data.user.isAdmin;
    });
  }
}
