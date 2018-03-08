import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ApiService } from './api.service';

@Injectable()

export class GobackService {

    returnUrl: string;

    constructor(private router: Router, private route: ActivatedRoute, platform: Platform, private api:ApiService) {
        platform.registerBackButtonAction(() => {
            this.goBack();
          });
    }

    goBack() {
        this.router.navigateByUrl(this.returnUrl);
    }

    gotoComponent(path: string) {
        this.router.navigate([path], { queryParams: { returnUrl: this.router.url } });
    }

    urlInit() {
        if(this.api.isLoggedIn) {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        }
        else {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
        }
        
    }
}
