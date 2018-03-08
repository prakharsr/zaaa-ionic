import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerAnimation } from '../../animations';
import { Platform } from 'ionic-angular';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-login',
  animations: [routerAnimation],
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  emailOrPhone: string;
  password: string;

  error: string;

  constructor(private api: ApiService, private router: Router, platform: Platform, private route: ActivatedRoute, private goback: GobackService) { }

  ngOnInit() {
    // this.router.queryParams.subscribe((params) => {
    //   this.returnUrl = params.returnUrl;
  // });
    this.goback.urlInit();

  }

  submit() {
    this.error = '';

    this.api.login(this.emailOrPhone, this.password).subscribe(
      data => {
        if (data.success) {
          this.router.navigateByUrl('');
        }
        else {
          console.log(data);

          this.error = data.msg;
        }
      },
      err => {
        console.log(err);

        this.error = 'Connection failed';
      }
    );
  }
}
