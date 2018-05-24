import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../models';
import { DashboardComponent } from '..';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // 
})
export class NavbarComponent implements OnInit {

  constructor(public goback: GobackService, public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
  }

}