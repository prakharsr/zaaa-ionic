import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RateCard } from '../rate-card';
import { RateCardApiService } from '../rate-card-api.service';

@Component({
  selector: 'app-rate-card-details',
  templateUrl: './rate-card-details.component.html',
  
})
export class RateCardDetailsComponent implements OnInit {

  ratecard = new RateCard();

  constructor(public goback: GobackService, private api: RateCardApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.goback.urlInit();
    this.route.data.subscribe((data: { rateCard: RateCard }) => {
      this.ratecard = data.rateCard;
    });
  }

  get isTypeWords() {

    if (this.ratecard.mediaType == 'Print' && this.ratecard.adType == 'Text Classified') {
      return true;
    }

    if (this.ratecard.mediaType == 'Electronic' && this.ratecard.adType == 'Scroll') {
      return true;
    }

    return false;
  }

  get isTypeLen() {

    if (this.ratecard.mediaType == 'Print' && this.ratecard.adType != 'Text Classified') {
      return true;
    }

    return false;
  }

  get isTypeTime() {

    if (this.ratecard.mediaType == 'Air') {
      return true;
    }

    if (this.ratecard.mediaType == 'Electronic' && this.ratecard.adType != 'Scroll') {
      return true;
    }

    return false;
  }
}
