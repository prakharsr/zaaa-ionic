import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import { DirectoryModule } from '../directory/directory.module';

import {
  RateCardApiService,
  RateCardResolver,
  RateCardListResolver,
  RateCardComponent,
  RateCardListComponent,
  RateCardDetailsComponent
} from '.';

import { RouterModule } from '@angular/router';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(RateCardModule),
    DirectoryModule
  ],
  declarations: [
    RateCardComponent,
    RateCardListComponent,
    RateCardDetailsComponent
  ],
  providers: [
    RateCardApiService,
    RateCardResolver,
    RateCardListResolver
  ]
})
export class RateCardModule { }
