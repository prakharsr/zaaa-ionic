import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ApiService, NotificationService } from 'app/services';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  
})
export class ChangePswComponent implements OnInit {

  oldPassword: string;
  password: string;
  cpassword: string;

  constructor(public goback: GobackService, private api: ApiService,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

  submit() {
    this.api.changePassword(this.oldPassword, this.password).subscribe(
      data => {
        if (data.success) {
          this.notifications.show('Password changed successfully');
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }
}
