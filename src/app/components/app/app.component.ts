import { GobackService } from 'app/services';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  // 
})
export class AppComponent implements OnInit {

  roNewOrEdit : boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.roNewOrEdit = event.urlAfterRedirects.startsWith("/releaseorders/new")
          || event.urlAfterRedirects.startsWith("/releaseorders/edit");
      } 
    });
  }

}
