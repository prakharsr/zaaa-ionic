import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  InvoiceResolver,
  InvoiceListResolver,

  InvoiceListComponent,
  InvoiceComponent,
  InvoiceDetailsComponent
} from '.';

import { ReleaseOrderDirResolver } from 'app/release-order';
import { FirmResolver } from '../services';

const routes: Routes = [
  {
    path: 'invoices',
    children: [
      { path: '', redirectTo: 'list/1', pathMatch: 'full' },
      {
        path: 'list/:page',
        component: InvoiceListComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          resolved: InvoiceListResolver
        }
      },
      {
        path: 'new/:id',
        component: InvoiceComponent,
        resolve: {
          resolved: ReleaseOrderDirResolver,
          firm: FirmResolver
        }
      },
      {
        path: 'new',
        component: InvoiceComponent,
        resolve: {
          firm: FirmResolver
        }
      },
      {
        path: ':id',
        component: InvoiceDetailsComponent,
        resolve: {
          invoice: InvoiceResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InvoiceRoutingModule { }
