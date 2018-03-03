import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AppComponent } from './components/app/app.component';
import { ErrorHandler } from '@angular/core';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './services/api.service';
import { RazorPayService } from './services/razorpay.service';
import { WindowService } from './services/window.service';
import { IfscService } from './services/ifsc.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PhoneVerifyGuardService } from './services/phone-verify-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { PlanGuardService } from './services/plan-guard.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlanSelectorComponent } from './components/plan-selector/plan-selector.component';
import { PhoneVerifyComponent } from './components/phone-verify/phone-verify.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateSelectorComponent } from './components/template-selector/template-selector.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { TemplateSelectorItemComponent } from './components/template-selector-item/template-selector-item.component';
import { CoUsersComponent } from './components/co-users/co-users.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { NewCoUserComponent } from './components/new-co-user/new-co-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirmProfileViewComponent } from './components/firm-profile-view/firm-profile-view.component';
import { FirmProfileEditComponent } from './components/firm-profile-edit/firm-profile-edit.component';
import { ChangePswComponent } from './components/change-psw/change-psw.component';
import { ForgotPswComponent } from './components/forgot-psw/forgot-psw.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    MyApp,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlanSelectorComponent,
    PhoneVerifyComponent,
    LoginComponent,
    TemplateSelectorComponent,
    RegisterComponent,
    ProfileEditComponent,
    TemplateSelectorItemComponent,
    NewCoUserComponent,
    CoUsersComponent,
    ProfileViewComponent,
    DashboardComponent,
    FirmProfileViewComponent,
    FirmProfileEditComponent,
    ChangePswComponent,
    ForgotPswComponent,
    NotFoundComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),    

    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AppComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // },

    ApiService,
    WindowService,
    RazorPayService,
    IfscService,
    AuthGuardService,
    PhoneVerifyGuardService,
    AdminGuardService,
    PlanGuardService
   
  ]
})
export class AppModule {}
