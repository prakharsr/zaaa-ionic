import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, NotificationService } from 'app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  emailOrPhone: string;
  password: string;

  hidePassword = true;

  constructor(public goback: GobackService, private api: ApiService,
    private router: Router,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit();
  }

  submit() {
    this.api.login(this.emailOrPhone, this.password).subscribe(
      data => {
        if (data.success) {
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
