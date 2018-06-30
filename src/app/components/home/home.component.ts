import { GobackService } from 'app/services';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Platform, LoadingController, Spinner } from 'ionic-angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firm } from '../../models/firm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // 
})
export class HomeComponent implements OnInit {

  profile = new Firm();
  isLoaded = false;

  constructor(public goback: GobackService, platform: Platform,
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
    this.goback.urlInit();
    // setTimeout(2000);

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

