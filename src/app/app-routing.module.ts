import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { Guard } from 'app/guards';

import { FirmResolver, UserProfileResolver } from 'app/services';

import {
  LoginComponent,
  RegisterComponent,
  ForgotPswComponent,
  PhoneVerifyComponent,
  ProfileViewComponent,
  AccountDetailsComponent,
  BusinessDetailsComponent,
  DashboardComponent,
  ChangePswComponent,
  ResetPasswordComponent,
  NotFoundComponent,
  HomeComponent
} from './components';

import {
  ProfileEditComponent,
  PlanSelectorComponent,
  EmptyComponent
} from 'app/admin';

import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TncComponent } from './components/tnc/tnc.component';
import { DirRoutingModule } from './directory/dir-routing.module';
import { RateCardRoutingModule } from './rate-card/rate-card-routing.module';
import { ReleaseOrderRoutingModule } from './release-order/release-order-routing.module';
import { InvoiceRoutingModule } from './invoice/invoice-routing.module';
import { ReceiptsRoutingModule } from './receipts/receipts-routing.module';
import { ReportsRoutingModule } from './reports/reports-routing.module';
import { CoUsersRoutingModule } from './co-users/co-users-routing.module';

const routes: Routes = [
  { path: 'empty', component: EmptyComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: '',
    canActivateChild: [Guard],
    children: [
      {
        path: "verify/mobile",
        component: PhoneVerifyComponent,
        data: { verifyMobile: true }
      },
      {
        path: 'plan',
        component: PlanSelectorComponent,
        data: { plan: true }
      },
      {
        path: "profile",
        component: ProfileViewComponent,
        resolve: {
          user: UserProfileResolver
        }
      },
      {
        path: "profile/edit",
        component: ProfileEditComponent,
        data: { admin: true },
        resolve: {
          user: UserProfileResolver
        }
      },
      {
        path: "firm",
        component: BusinessDetailsComponent,
        resolve: {
          firm: FirmResolver,
          user: UserProfileResolver
        }
      },
      {
        path: "account",
        component: AccountDetailsComponent,
        resolve: {
          user: UserProfileResolver
        }
      },
      {
        path: 'tnc',
        component: TncComponent,
        data: { admin: true },
        resolve: {
          firm: FirmResolver
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        resolve: {
          user: UserProfileResolver
        }
      },
      { path: 'changePassword', component: ChangePswComponent },
    ]
  },
  { path: 'reset_password/:token', component: ResetPasswordComponent },
  {
    path: 'tickets',
    children: [
      { path: '', redirectTo: 'list/1', pathMatch: 'full' },
      {
        path: 'list/:page',
        component: TicketListComponent
      },
      {
        path: 'new',
        component: CreateTicketComponent
      }
    ]
  },
  { path: 'forgotPassword', component: ForgotPswComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    DirRoutingModule,
    RateCardRoutingModule,
    CoUsersRoutingModule,
    ReleaseOrderRoutingModule,
    InvoiceRoutingModule,
    ReceiptsRoutingModule,
    ReportsRoutingModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
