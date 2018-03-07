import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../animations';
import { ApiService } from '../../services/api.service';
import { Platform } from 'ionic-angular';
import { GobackService } from '../../services/goback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  animations: [routerAnimation],
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(platform: Platform, private goback: GobackService, private api: ApiService, private router: Router) {
   }

  ionViewWillEnter() {
    
  }

  ngOnInit() {
    if(this.api.isLoggedIn) {
      this.router.navigateByUrl("/dashboard");
    }
    else {
      this.router.navigateByUrl("/login");
    }
    this.goback.urlInit();
  }

}
