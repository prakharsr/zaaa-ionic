import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { LocationStrategy,
         // PathLocationStrategy } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlanSelectorComponent } from './components/plan-selector/plan-selector.component';
import { PhoneVerifyComponent } from './components/phone-verify/phone-verify.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TemplateSelectorComponent } from './components/template-selector/template-selector.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { TemplateSelectorItemComponent } from './components/template-selector-item/template-selector-item.component';

import { ApiService } from './services/api.service';
import { RazorPayService } from './services/razorpay.service';
import { WindowService } from './services/window.service';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    MyApp,
    NavbarComponent,
    HomeComponent,
    PlanSelectorComponent,
    PhoneVerifyComponent,
    LoginComponent,
    SignupComponent,
    TemplateSelectorComponent,
    RegisterComponent,
    ProfileEditComponent,
    TemplateSelectorItemComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
    ApiService,
    WindowService,
    RazorPayService,
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // }
  ]
})
export class AppModule {}
