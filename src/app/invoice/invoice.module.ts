import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import { ReleaseOrderModule } from 'app/release-order/release-order.module';
import { InvoiceRoutingModule } from './invoice-routing.module';

import {
  InvoiceApiService,
  InvoiceResolver,
  InvoiceListResolver,
  InvoiceDirResolver,

  InvoiceComponent,
  InvoiceDetailsComponent,
  InvoiceListComponent
} from '.';
import { SelectReleaseOrderComponent } from './select-release-order/select-release-order.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(InvoiceModule),
    ReleaseOrderModule,
  ],
  declarations: [
    InvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent,
    SelectReleaseOrderComponent
  ],
  providers: [
    InvoiceApiService,
    InvoiceResolver,
    InvoiceListResolver,
    InvoiceDirResolver
  ],
  entryComponents: [
    SelectReleaseOrderComponent
  ]
})
export class InvoiceModule { }
