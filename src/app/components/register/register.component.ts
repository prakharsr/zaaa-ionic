import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@aaman/main/api.service';
import { NotificationService } from '@aaman/main/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  acceptTnC: boolean;

  constructor(public goback: GobackService, private api: ApiService,
    private router: Router,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit(); }

  GoToDashboard() : void {
    this.router.navigateByUrl('/dashboard');
  }

  submit()
  {
    this.api.signup(this.name, this.email).subscribe(
      data => {
        if (data.success) {
          this.GoToDashboard();
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }
}
