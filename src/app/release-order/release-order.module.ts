import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import {
  InsertionCheckComponent,
  ReleaseOrderComponent,
  ReleaseOrderDetailsComponent,
  ReleaseOrderListComponent,
} from '.';

import { ReleaseOrderRoutingModule } from './release-order-routing.module';
import { CreateRoGuard } from './create-ro-guard.service';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(ReleaseOrderModule)
  ],
  providers: [CreateRoGuard],
  declarations: [
    ReleaseOrderComponent,
    ReleaseOrderListComponent,
    ReleaseOrderDetailsComponent,
    InsertionCheckComponent
  ]
})
export class ReleaseOrderModule { }
