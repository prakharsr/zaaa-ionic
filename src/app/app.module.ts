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
  FirmProfileViewComponent,
  DashboardComponent,
  ChangePswComponent,
  ResetPasswordComponent,
  NotFoundComponent,
  NavbarComponent,
  LoaderComponent
} from './components';

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
    FirmProfileViewComponent,
    ChangePswComponent,
    ForgotPswComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    LoaderComponent
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
    FirmProfileViewComponent,
    ChangePswComponent,
    ForgotPswComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    LoaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // },
   
  ]
})
export class AppModule {}
