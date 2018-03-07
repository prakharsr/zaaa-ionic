import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavController } from 'ionic-angular';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api: ApiService, private navCtrl: NavController, private goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
  }
}
