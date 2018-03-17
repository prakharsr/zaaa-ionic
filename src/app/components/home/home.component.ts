import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../animations';
import { ApiService } from '../../services/api.service';
import { Platform, LoadingController, Spinner } from 'ionic-angular';
import { GobackService } from '../../services/goback.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firm } from '../../models/firm';

@Component({
  selector: 'app-home',
  animations: [routerAnimation],
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile = new Firm();
  isLoaded = false;

  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(platform: Platform,
     private goback: GobackService,
     public api: ApiService,
     private router: Router,
     private loadingCtrl: LoadingController) {
   }
 
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Logging In ...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.isLoaded = true;
      setTimeout(() => {
        this.routeToDashboard();
      }, 2000);      
    }, 4000);
  }

  routeToDashboard() {
    this.router.navigateByUrl("/dashboard");
  }
  ngOnInit() {
    // setTimeout(2000);
    this.goback.urlInit(); 

    if(this.api.isLoggedIn) 
    {
      this.api.getFirmProfile().subscribe(data => this.profile = data);
      this.presentLoadingDefault();
      
    }
    else {
      this.router.navigateByUrl("/login");
    }
       
  }

}

