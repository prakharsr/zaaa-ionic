import { Component, OnInit } from '@angular/core';
import { Executive } from '../executive';
import { ExecutiveApiService } from '../executive-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { GobackService } from '../../../services/goback.service';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  // styleUrls: ['./executive.component.css']
})
export class ExecutiveComponent implements OnInit {

  executive = new Executive();

  // dobModel;

  id: string;

  edit = false;
  
  constructor(private api: ExecutiveApiService,
    private route: ActivatedRoute,
    private router: Router,
    private notifications: NotificationService, 
    public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');

        this.edit = true;

        this.route.data.subscribe((data: { executive: Executive }) => {
          this.executive = data.executive;
        });
      }
    });
  }

  private goBack() {
    this.router.navigateByUrl(this.edit ? '/dir/executives/' + this.id : '/dir/executives');
  }

  private createExecutive() {
    this.api.createExecutive(this.executive).subscribe(
      data => {
        if (data.success) {
          this.goBack();
        }
        else {
          this.notifications.show(data.msg);
        }
      },
      err => {
        console.log(err);

        this.notifications.show('Connection failed');
      }
    )
  }

  private editExecutive() {
    this.api.editExecutive(this.executive).subscribe(
      data => {
        if (data.success) {
          this.goBack();
        }
        else {
          this.notifications.show(data.msg);
        }
      },
      err => {
        console.log(err);

        this.notifications.show('Connection failed');
      }
    )
  }

  submit() {
    if (this.edit) {
      this.editExecutive();
    }
    else this.createExecutive();
  }

  cancel() {
    this.goBack();
  }

}