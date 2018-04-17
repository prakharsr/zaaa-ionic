import { Component, OnInit } from '@angular/core';
import { ReleaseOrder } from '../release-order';
import { ReleaseOrderApiService } from '../release-order-api.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-release-order-details',
  templateUrl: './release-order-details.component.html',
  // styleUrls: ['./release-order-details.component.css']
})
export class ReleaseOrderDetailsComponent implements OnInit {

  releaseOrder = new ReleaseOrder();

  constructor(private api: ReleaseOrderApiService,
    private route: ActivatedRoute, 
    public goback: GobackService) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { releaseOrder: ReleaseOrder }) => {
      this.releaseOrder = data.releaseOrder;
    });
  }

  toDate(date: NgbDate) {
    return new Date(date.year, date.month - 1, date.day);
  }
}
