import { Component, OnInit } from '@angular/core';
import { MediaHouse } from '../media-house';
import { MediaHouseApiService } from '../media-house-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GobackService } from '../../../services/goback.service';

@Component({
  selector: 'app-media-house-details',
  templateUrl: './media-house-details.component.html',
  // styleUrls: ['./media-house-details.component.css']
})
export class MediaHouseDetailsComponent implements OnInit {

  mediaHouse = new MediaHouse();
  id: string;

  constructor(private api: MediaHouseApiService,
    private route: ActivatedRoute,
    private router: Router, public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { mediaHouse: MediaHouse }) => {
      this.mediaHouse = data.mediaHouse;
    });
  }

}
