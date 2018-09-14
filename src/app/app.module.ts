import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
// import { IonicImageLoader } from 'ionic-image-loader';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseModule } from './base.module';
import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { ReportsModule } from './reports/reports.module';

import * as comp from './components';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { DashboardApiService } from './services/dashboard-api.service';
import { TncComponent } from './components/tnc/tnc.component';

import { FCM } from '@ionic-native/fcm';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DirectoryModule } from './directory/directory.module';
import { CoUsersModule } from './co-users/co-users.module';
import { RateCardModule } from './rate-card/rate-card.module';
import { ReleaseOrderModule } from './release-order/release-order.module';
import { AccountsModule } from './accounts/accounts.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { InvoiceModule } from './invoice/invoice.module';

@NgModule({
  declarations: [
    MyApp,

    AppComponent,
    comp.NavbarComponent,
    comp.HomeComponent,
    comp.PhoneVerifyComponent,
    comp.RegisterComponent,
    comp.ProfileViewComponent,
    comp.DashboardComponent,
    comp.AccountDetailsComponent,
    comp.BusinessDetailsComponent,
    comp.ChangePswComponent,
    comp.ForgotPswComponent,
    comp.NotFoundComponent,
    comp.ResetPasswordComponent,
    comp.LoaderComponent,
    CreateTicketComponent,
    TncComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    BrowserAnimationsModule,
    BaseModule.forRoot(),
    AdminModule,
    ReportsModule,

    DirectoryModule,
    CoUsersModule,
    RateCardModule,
    ReleaseOrderModule,
    AccountsModule,
    ReportsModule,
    ReceiptsModule,
    InvoiceModule,
    AdminModule,

    AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    AppComponent,
    comp.NavbarComponent,
    comp.HomeComponent,
    comp.PhoneVerifyComponent,
    comp.RegisterComponent,
    comp.ProfileViewComponent,
    comp.DashboardComponent,
    comp.AccountDetailsComponent,
    comp.BusinessDetailsComponent,
    comp.ChangePswComponent,
    comp.ForgotPswComponent,
    comp.NotFoundComponent,
    comp.ResetPasswordComponent,
    comp.LoaderComponent,
    CreateTicketComponent,
    TncComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardApiService,
    FCM,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // },
   
  ]
})
export class AppModule {}
