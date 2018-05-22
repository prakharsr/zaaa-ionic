import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoUser } from '@aaman/couser/co-user';
import { CoUserApiService } from '@aaman/couser/co-user-api.service';
import { DialogService } from '@aaman/main/dialog.service';
import { UserProfile } from '@aaman/main/user-profile';

@Component({
  selector: 'app-co-users',
  templateUrl: './co-users.component.html',
  
})
export class CoUsersComponent implements OnInit {

  admin: boolean;
  myId: string;

  coUsers: CoUser[] = [];

  constructor(public goback: GobackService, private api: CoUserApiService,
    private dialog: DialogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { coUsers: CoUser[], user: UserProfile }) => {
      this.coUsers = data.coUsers;

      this.admin = data.user.isAdmin;
      this.myId = data.user.id;
    });
  }

  delete(coUser: CoUser) {
    this.dialog.confirmDeletion("Are you sure want to delete this Co-User?").subscribe(
      confirm => {
        if (!confirm) {
          return;
        }

        this.api.deleteCoUser(coUser).subscribe(
          data => {
            if (data.success) {
              this.coUsers = this.coUsers.filter(h => h.id !== coUser.id);
            }
          }
        );
      }
    );
  }
}
