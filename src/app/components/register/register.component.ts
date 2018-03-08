import { Component, OnInit, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { routerAnimation } from '../../animations';
import { Router } from '@angular/router';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-register',
  animations: [routerAnimation],
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;

  name: string;
  email: string;
  password: string;
  cpassword: string;
  error: string;

  constructor(private api: ApiService, private router: Router, private goback:GobackService) { }

  ngOnInit() { 
    this.goback.urlInit();
  }

  GoToDashboard() : void {
    this.goback.gotoComponent('dashboard');
  }

  submit()
  {
    this.error = '';

    this.api.signup(this.name, this.email).subscribe(
      data => {
        if (data.success) {
          this.router.navigateByUrl('dashboard');
        }
        else {
          console.log(data);

          this.error = data.msg;
        }
      },
      err => {
        this.error = "Connection failed";
        console.log(err);
      }
    );
  }
}
