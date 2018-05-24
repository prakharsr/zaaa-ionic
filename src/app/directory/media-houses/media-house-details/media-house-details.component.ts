import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaHouse } from '../media-house';
import { MediaHouseApiService } from '../media-house-api.service';

@Component({
  selector: 'app-media-house-details',
  templateUrl: './media-house-details.component.html',
  
})
export class MediaHouseDetailsComponent implements OnInit {

  mediaHouse = new MediaHouse();
  id: string;

  constructor(public goback: GobackService, private api: MediaHouseApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { mediaHouse: MediaHouse }) => {
      this.mediaHouse = data.mediaHouse;
    });
  }

}
