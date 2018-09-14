import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import {
  ReceiptListComponent,
  LinkAdvanceComponent,
  AdvanceReceiptComponent,
  ReceiptComponent,
  ReceiptDetailsComponent
} from '.';
import { CreateReceiptComponent } from './create-receipt/create-receipt.component';
import { ReceiptsRoutingModule } from './receipts-routing.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(ReceiptsModule)
  ],
  declarations: [
    ReceiptComponent,
    ReceiptListComponent,
    ReceiptDetailsComponent,
    AdvanceReceiptComponent,
    LinkAdvanceComponent,
    CreateReceiptComponent
  ]
})
export class ReceiptsModule { }
