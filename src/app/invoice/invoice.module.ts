import { NgModule } from '@angular/core';
import { BaseModule } from '../base.module';

import {
  InvoiceComponent,
  InvoiceDetailsComponent,
  InvoiceListComponent
} from '.';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    BaseModule,
    IonicModule.forRoot(InvoiceModule)
  ],
  declarations: [
    InvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent
  ]
})
export class InvoiceModule { }
