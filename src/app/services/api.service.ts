import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Plan } from '../models/plan';
import { Template } from '../models/template';
import { User } from '../models/user';

import { WindowService } from './window.service';

@Injectable()
export class ApiService {

  private authTokenKey : string = "auth_token";

  private _authToken: string;

  get authToken() : string {
    if (!this._authToken)
    {
      this._authToken = this.windowService.window.localStorage.getItem(this.authTokenKey);
    }

    return this._authToken;
  }

  get isLoggedIn() : boolean {
    if (this.authToken)
        return true;
      
    return false;
  }

  get loggedInUser() : User {
    return new User("Mathew Sachin", "Mathew.Sachin@outlook.com", "8527852352");
  }

  set authToken(authToken: string) {
    if (!authToken) {
      this._authToken = '';
      this.windowService.window.localStorage.removeItem(this.authTokenKey);
    }
    else {
      this._authToken = authToken;
      this.windowService.window.localStorage.setItem(this.authTokenKey, authToken);
    }
  }

  constructor(private http: HttpClient, private windowService: WindowService) { }

  signup(email: string, password: string)
  {
    //this.http.post("http://localhost:8080/api/signup", {
    //  name: email,
    //  password: password
    //})//.subscribe(data => this.debug = JSON.stringify(data),
     //error => this.debug = JSON.stringify(error));
  }

  login(email: string, password: string): boolean {
    return false;
  }

  get plans() : Observable<Plan[]> {
    return of([
      new Plan("Trial", 0, 2, 1, "One month trial"),
      new Plan("Silver", 5000, 2, 1, "Small agencies"),
      new Plan("Gold", 10000, 5, 2, "Most popular"),
      new Plan("Platinum", 15000, 10, 3, "Maximum value"),
    ]);
  }

  get templates() : Observable<Template[]> {
    return of([
      new Template("Template 1", "http://www.monsterbeatsstudio.us/download/20039/systemdesigndocument1.gif"),
      new Template("Template 2", "http://www.le-chuang.com/wp-content/uploads/2016/09/business-case-template-businesscase9-SUFOjh.jpg")
    ]);
  }

  get state() : number {
    return 0;
  }

  set state(state: number) {}

  set plan(plan: Plan) { }

  sendOtp(number: string) { }

  verifyOtp(otp: string) : boolean {
    return false;
  }

  setTemplates(invoiceTemplate: Template,
    releaseOrderTemplate: Template,
    paymentReceiptTemplate: Template) {}
}
