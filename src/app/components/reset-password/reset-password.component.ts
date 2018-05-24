import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, NotificationService } from 'app/services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  cpassword: string;
  token: string;

  constructor(public goback: GobackService, private api: ApiService,
    private route: ActivatedRoute,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token');
    });
  }

  submit() {
    this.api.resetPsw(this.token, this.password).subscribe(
      data => {
        if (data.success) {
          this.notifications.show('Password Changed Successfully.');
        }
        else {
          console.log(data);
          this.notifications.show(data.msg);
        }
      }
    );
  }
}
