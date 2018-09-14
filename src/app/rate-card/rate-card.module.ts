import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import {
  RateCardComponent,
  RateCardListComponent,
  RateCardDetailsComponent
} from '.';

import { RateCardRoutingModule } from './rate-card-routing.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(RateCardModule)
  ],
  declarations: [
    RateCardComponent,
    RateCardListComponent,
    RateCardDetailsComponent
  ]
})
export class RateCardModule { }
