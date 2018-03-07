import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()

export class GobackService {

    returnUrl: string;

    constructor(private router: Router, private route: ActivatedRoute, platform: Platform) {
        platform.registerBackButtonAction(() => {
            this.goBack();
          });
    }

    goBack() {
        this.router.navigateByUrl(this.returnUrl);
    }

    gotoComponent(path: string) {
        this.router.navigate([path], { queryParams: { returnUrl: this.router.url } }); // this.returnUrl ?
    }

    urlInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }
}
