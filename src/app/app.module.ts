import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AppComponent } from './components/app/app.component';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';
import { BaseModule } from './base.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './/app-routing.module';
import { DirectoryModule } from './directory/directory.module';
import { CoUsersModule } from './co-users/co-users.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PhoneVerifyComponent } from './components/phone-verify/phone-verify.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirmProfileViewComponent } from './components/firm-profile-view/firm-profile-view.component';
import { ChangePswComponent } from './components/change-psw/change-psw.component';
import { ForgotPswComponent } from './components/forgot-psw/forgot-psw.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
      
    BaseModule,
    AdminModule,
    DirectoryModule,
    CoUsersModule,
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
