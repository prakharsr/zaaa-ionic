import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { IonicImageLoader } from 'ionic-image-loader';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { WebIntent } from '@ionic-native/web-intent';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseModule } from './base.module';
import { AdminModule } from './admin/admin.module';
import { DirectoryModule } from './directory/directory.module';
import { CoUsersModule } from './co-users/co-users.module';
import { RateCardModule } from './rate-card/rate-card.module';
import { ReleaseOrderModule } from './release-order/release-order.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';


import {
  AppComponent,

  HomeComponent,
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
  NavbarComponent,
  LoaderComponent
} from './components';

import { ReportsModule } from './reports/reports.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { DashboardApiService } from './services/dashboard-api.service';

@NgModule({
  declarations: [
    MyApp,

    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhoneVerifyComponent,
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent,
    DashboardComponent,
    AccountDetailsComponent,
    BusinessDetailsComponent,
    ChangePswComponent,
    ForgotPswComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    LoaderComponent,
    TicketListComponent,
    CreateTicketComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    BrowserModule,
    BrowserAnimationsModule,
    BaseModule,
    AdminModule,
    DirectoryModule,
    CoUsersModule,
    RateCardModule,
    ReleaseOrderModule,
    InvoiceModule,
    ReceiptsModule,
    AccountsModule,
    ReportsModule,
    AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhoneVerifyComponent,
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent,
    DashboardComponent,
    AccountDetailsComponent,
    BusinessDetailsComponent,
    ChangePswComponent,
    ForgotPswComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    LoaderComponent,
    TicketListComponent,
    CreateTicketComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DashboardApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    File,
    DocumentViewer,
    FileTransfer,
    WebIntent
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // },
   
  ]
})
export class AppModule {}
