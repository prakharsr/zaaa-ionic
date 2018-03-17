import { Component, OnInit } from '@angular/core';
import { RateCard } from '../rateCard';
import { RateCardApiService } from '../rate-card-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-rate-card-details',
  templateUrl: './rate-card-details.component.html',
  // styleUrls: ['./rate-card-details.component.css']
})
export class RateCardDetailsComponent implements OnInit {

  ratecard = new RateCard();
  id: string;

  constructor(private api: RateCardApiService,
    private route: ActivatedRoute,
    private router: Router,
    private goback: GobackService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.api.getRateCard(this.id).subscribe(data => this.ratecard = data);
    });
  }

}
