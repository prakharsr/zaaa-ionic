import { GobackService } from 'app/services';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppComponent } from './components/app/app.component';
import { CoUsersComponent } from './components/co-users/co-users.component';
import { FCM } from '@ionic-native/fcm';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
   rootPage:any = AppComponent;

   @ViewChild('myNav') navCtrl: NavController;
    // rootPage:string;

  constructor(public goback: GobackService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

