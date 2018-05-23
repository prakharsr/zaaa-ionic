import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AppComponent } from '@aaman/main/home/app.component';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IonicImageLoader } from 'ionic-image-loader';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';

import { BaseModule } from './base.module';
import { AdminModule } from '@aaman/main/admin.module';
import { DirectoryModule } from '@aaman/dir/directory.module';
import { CoUsersModule } from '@aaman/couser/co-users.module';
import { RateCardModule } from '@aaman/ratecard/rate-card.module';
import { ReleaseOrderModule } from '@aaman/releaseorder/release-order.module';
import { InvoiceModule } from '@aaman/invoice/invoice.module';
import { ReceiptsModule } from '@aaman/receipts/receipts.module';
import { AccountsModule } from '@aaman/accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from '@aaman/main/home/home.component';
import { PhoneVerifyComponent } from '@aaman/main/phone-verify/phone-verify.component';
import { NavbarComponent } from '@aaman/main/navbar/navbar.component';
import { LoginComponent } from '@aaman/main/login/login.component';
import { RegisterComponent } from '@aaman/main/register/register.component';
import { ProfileViewComponent } from '@aaman/main/profile-view/profile-view.component';
import { DashboardComponent } from '@aaman/main/dashboard/dashboard.component';
import { FirmProfileViewComponent } from '@aaman/main/firm-profile-view/firm-profile-view.component';
import { ChangePswComponent } from '@aaman/main/change-psw/change-psw.component';
import { ForgotPswComponent } from '@aaman/main/forgot-psw/forgot-psw.component';
import { NotFoundComponent } from '@aaman/main/not-found/not-found.component';
import { ResetPasswordComponent } from '@aaman/main/reset-password/reset-password.component';
import { LoaderComponent } from '@aaman/main/loader/loader.component';

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
