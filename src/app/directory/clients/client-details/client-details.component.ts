import { GobackService } from '@aaman/main/goback.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '@aaman/dir/clients/client';
import { ClientApiService } from '@aaman/dir/clients/client-api.service';
import { NotificationService } from '@aaman/main/notification.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  
})
export class ClientDetailsComponent implements OnInit {

  client = new Client();

  constructor(public goback: GobackService, private api: ClientApiService,
    private route: ActivatedRoute,
    private router: Router,
    private notifications: NotificationService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { client: Client }) => {
      this.client = data.client;
    });
  }

  uploadProfilePicture(files: FileList) {
    this.api.uploadProfilePicture(this.client.id, files.item(0)).subscribe(
      data => {
        if (data.success) {
          this.notifications.show('Profile Photo uploaded successfully');

          this.client.contactpersons[0].photo = environment.uploadsBaseUrl + data.photo;
        }
        else {
          console.log(data);

          this.notifications.show(data.msg);
        }
      }
    );
  }

}
