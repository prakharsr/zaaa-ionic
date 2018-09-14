import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppComponent } from './components/app/app.component';
import { CoUsersComponent } from './components/co-users/co-users.component';
import { FCM } from '@ionic-native/fcm';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from './services';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
   rootPage:any = AppComponent;
   stack: string[] = [];

   @ViewChild('myNav') navCtrl: NavController;
    // rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private router: Router, public fcm: FCM, public api: ApiService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackTranslucent();
      splashScreen.hide();
    });

    platform.registerBackButtonAction(() => {
      if (this.stack.length) {
        console.log(this.stack);
          this.router.navigateByUrl(this.stack.pop());
      }
  });

  this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
          this.stack.push(value.urlAfterRedirects);
      }
  });

    fcm.onNotification().subscribe( data => {
      if(data.wasTapped){
        console.log(JSON.stringify(data));
  this.navCtrl.setRoot('', { profileId: data.profileId });
        //Notification was received on device tray and tapped by the user.
      }else{
        console.log(JSON.stringify(data));
  this.navCtrl.push('', { profileId: data.profileId });
        //Notification was received in foreground. Maybe the user needs to be notified.
      }
    });
  }
}

