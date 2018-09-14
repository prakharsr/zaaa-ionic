
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, NotificationService } from 'app/services';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  emailOrPhone: string;
  password: string;

  hidePassword = true;

  constructor(  private api: ApiService,
    private router: Router,
    private notifications: NotificationService, public fcm: FCM) { }

  ngOnInit() {
     
  }

  submit() {
    this.api.login(this.emailOrPhone, this.password).subscribe(
      data => {
        if (data.success) {
          this.fcm.getToken().then(token => {
          this.api.sendToken(token).subscribe( data => {
            if(data.success) {
              console.log("token sent successfully, token: "+ data);
            }
            else {
              console.log("token couldnot be sent");
            }

          });
        });
          this.router.navigateByUrl('dashboard');
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }
}
