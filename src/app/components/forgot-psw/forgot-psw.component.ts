import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@aaman/main/api.service';
import { NotificationService } from '@aaman/main/notification.service';

@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  
})
export class ForgotPswComponent implements OnInit {

  email: string;

  constructor(public goback: GobackService, private api: ApiService,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

  submit() {
    this.api.forgotPsw(this.email).subscribe(
      data => {
        if (data.success) {
          this.notifications.show('Password Reset Email sent.');
        }
        else {
          console.log(data);
          this.notifications.show(data.msg);
        }
      }
    );
  }
}
