import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavController } from 'ionic-angular';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';
import { GobackService } from '../../services/goback.service';
import { LoginComponent } from '../login/login.component';
import { WindowService } from '../../services/window.service';
// import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // isLoginComponent = false;

  constructor(public api: ApiService,
     private navCtrl: NavController,
     private goback: GobackService,
    //  private winRef: WindowService
    ) { 
    // let view = this.navCtrl.getActive();
    // if ( view.instance instanceof LoginComponent ){
    //     this.isLoginComponent = true;
    //   }
  }

  ngOnInit() {

    // if(this.winRef.window.location.href == (environment.ionicUrl+"/#/login"))
    // {
    //   this.isLoginComponent = true;
    // }
    // console.log(this.winRef.window.location.href);
    // console.log(environment.ionicUrl+"/#/");
    this.goback.urlInit();
  }
}
