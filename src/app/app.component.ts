import { GobackService, ApiService } from 'app/services';
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

  constructor(public goback: GobackService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public fcm: FCM, public api: ApiService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleBlackTranslucent();
      splashScreen.hide();
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

    this.fcm.getToken().then(token => {
      this.api.sendToken(token).subscribe( data => {
        if(data.success) {
          console.log("token sent successfully, token: "+ data);
        }
        else {
          console.log("token couldnot be sent");
        }

      });
      // Your best bet is to here store the token on the user's profile on the
      // Firebase database, so that when you want to send notifications to this 
      // specific user you can do it from Cloud Functions.
    });
  }
}

