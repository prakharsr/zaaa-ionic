import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'app/models';
import { ApiService, NotificationService } from 'app/services';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  
})
export class ProfileEditComponent implements OnInit {

  profile = new UserProfile();

  constructor(public goback: GobackService, private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { user: UserProfile }) => {
      this.profile = data.user;
    });
  }

  private goBack() {
    this.router.navigateByUrl('/profile');
  }

  submit() {
    this.api.setUserProfile(this.profile).subscribe(
      data => {
        if (data.success) {
          this.goBack();
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }

  cancel() {
    this.goBack();
  }
}
