import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnimation } from '../../animations';
import { ApiService } from '../../services/api.service';
import { Platform, LoadingController } from 'ionic-angular';
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

  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(platform: Platform,
     private goback: GobackService,
     public api: ApiService,
     private router: Router,
     private splash: SplashScreen,
     private loadingCtrl: LoadingController) {
   }
      
      // <div class="text-center">
      //      <img [src]="this.profile.logo" class="img-fluid max-w-200" [alt]="this.profile.name">
      // </div>

presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: `<br>

    <div class="text-center">
      <h1>Advertising Agency Manager (AAMan)</h1>
      <br>
      <p>A complete solution for Advertising Agencies.</p>
      <br>
      <img src="assets/small_tux.png" width="150" height="150">
    </div>`,
    duration:3000
  });

  setTimeout(() => {
    this.router.navigateByUrl("/dashboard");
    loading.dismiss();
  }, 1200);

  loading.present();
}

  ngOnInit() {
    // setTimeout(2000);
    this.goback.urlInit(); 

    if(this.api.isLoggedIn) 
    {
      this.api.getFirmProfile().subscribe(data => this.profile = data);
      this.presentLoadingCustom();
    }
    else {
      this.router.navigateByUrl("/login");
    }
       
  }

}

